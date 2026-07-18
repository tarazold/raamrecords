# Raam Records

Portfolio website for Sriram Venkatesh, a music producer, composer, sound designer, and audio engineer from Chennai.

## Development

```sh
npm ci
npm run dev
```

The local development server runs on port `8080`.

## Build

```sh
npm run build
```

The production build is emitted to `dist`.

## Deployment

This branch is configured for Cloudflare Workers static assets using `wrangler.jsonc`.

Use:

```sh
npm ci
npm run build
```

Cloudflare uploads the `dist` directory and uses `single-page-application` fallback handling for client routes.

## Contact form email

The `/api/contact` Worker endpoint sends form submissions through Resend to `contact@raamrecords.com` from `website@raamrecords.com`.

Before the first production deployment:

1. Add and verify `raamrecords.com` in the Resend dashboard.
2. Create a Resend API key with sending access.
3. Store the key as an encrypted Cloudflare Worker secret:

```sh
npx wrangler secret put RESEND_API_KEY
```

For local Worker development, place the key in an uncommitted `.dev.vars` file:

```dotenv
RESEND_API_KEY="re_your_api_key"
```

The `contact@raamrecords.com` address must route to a mailbox that is monitored.

Deploy the site and contact endpoint together with:

```sh
npm run deploy
```
