const CONTACT_EMAIL = "contact@raamrecords.com";
const SENDER_EMAIL = "website@raamrecords.com";
const RESEND_API_URL = "https://api.resend.com/emails";
const MAX_BODY_BYTES = 12_000;

type ContactSubmission = {
  name: string;
  email: string;
  message: string;
  website?: string;
};

const jsonResponse = (body: Record<string, unknown>, status: number) =>
  Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });

const isContactSubmission = (value: unknown): value is ContactSubmission => {
  if (!value || typeof value !== "object") return false;

  const submission = value as Record<string, unknown>;
  return (
    typeof submission.name === "string" &&
    typeof submission.email === "string" &&
    typeof submission.message === "string" &&
    (submission.website === undefined || typeof submission.website === "string")
  );
};

const isValidEmail = (email: string) =>
  email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );

const getResendError = (value: unknown) => {
  if (!value || typeof value !== "object") return "Unknown Resend error";

  const error = value as Record<string, unknown>;
  const name = typeof error.name === "string" ? error.name : "Resend error";
  const message = typeof error.message === "string" ? error.message : "No error message returned";
  return `${name}: ${message}`.slice(0, 500);
};

const readRequestBody = async (request: Request) => {
  const contentLength = Number(request.headers.get("Content-Length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) throw new Error("BODY_TOO_LARGE");

  const reader = request.body?.getReader();
  if (!reader) return "";

  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    totalBytes += value.byteLength;
    if (totalBytes > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new Error("BODY_TOO_LARGE");
    }
    chunks.push(value);
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return new TextDecoder().decode(body);
};

const handleContactSubmission = async (request: Request, env: Env) => {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get("Origin");
  if (origin && origin !== requestUrl.origin) {
    return jsonResponse({ error: "Request origin is not allowed." }, 403);
  }

  if (!request.headers.get("Content-Type")?.toLowerCase().startsWith("application/json")) {
    return jsonResponse({ error: "Expected a JSON request." }, 415);
  }

  let submission: unknown;
  try {
    submission = JSON.parse(await readRequestBody(request));
  } catch (error) {
    const status = error instanceof Error && error.message === "BODY_TOO_LARGE" ? 413 : 400;
    return jsonResponse({ error: "Invalid request." }, status);
  }

  if (!isContactSubmission(submission)) {
    return jsonResponse({ error: "Please complete every field." }, 400);
  }

  const name = submission.name.trim();
  const email = submission.email.trim().toLowerCase();
  const message = submission.message.trim();

  // Silently accept honeypot submissions so bots do not learn how they were detected.
  if (submission.website?.trim()) {
    return jsonResponse({ ok: true }, 200);
  }

  if (
    name.length < 2 ||
    name.length > 100 ||
    /[\r\n]/.test(name) ||
    !isValidEmail(email) ||
    message.length < 10 ||
    message.length > 5_000
  ) {
    return jsonResponse({ error: "Please check the form details and try again." }, 400);
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

  try {
    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `contact-${crypto.randomUUID()}`,
      },
      body: JSON.stringify({
        from: `Raam Records Website <${SENDER_EMAIL}>`,
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `New project inquiry from ${name}`,
        text: `New project inquiry\n\nName: ${name}\nEmail: ${email}\n\nProject:\n${message}`,
        html: `<h1>New project inquiry</h1><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Project:</strong></p><p>${safeMessage}</p>`,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    const result: unknown = await response.json().catch(() => null);
    if (!response.ok) {
      console.error(
        JSON.stringify({
          event: "contact_email_rejected",
          status: response.status,
          error: getResendError(result),
          requestId: request.headers.get("CF-Ray"),
        }),
      );
      return jsonResponse({ error: "The message could not be sent. Please try again." }, 502);
    }

    const messageId =
      result && typeof result === "object" && "id" in result && typeof result.id === "string"
        ? result.id
        : null;

    console.log(JSON.stringify({ event: "contact_email_sent", messageId }));
    return jsonResponse({ ok: true }, 200);
  } catch (error) {
    const emailError = error instanceof Error ? error : new Error("Unknown email error");
    console.error(
      JSON.stringify({
        event: "contact_email_failed",
        error: emailError.message,
        requestId: request.headers.get("CF-Ray"),
      }),
    );
    return jsonResponse({ error: "The message could not be sent. Please try again." }, 502);
  }
};

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") {
        return new Response(null, {
          status: 405,
          headers: { Allow: "POST", "Cache-Control": "no-store" },
        });
      }

      return handleContactSubmission(request, env);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
