import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: a small gold dot that snaps to the pointer plus a trailing
 * ring that eases behind it. Elements with [data-cursor="hover"] grow the
 * ring; [data-cursor-label="..."] shows a text chip (e.g. "PLAY").
 * Renders nothing on touch devices.
 */
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor");

    const pos = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let hovering = false;
    let label = "";
    let raf: number;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;

      const target = (e.target as HTMLElement).closest<HTMLElement>(
        "[data-cursor], a, button, [role='button'], input, textarea, label"
      );
      hovering = !!target;
      label = target?.dataset.cursorLabel ?? "";

      if (labelRef.current) {
        labelRef.current.textContent = label;
        labelRef.current.style.opacity = label ? "1" : "0";
      }
    };

    const tick = () => {
      ring.x += (pos.x - ring.x) * 0.16;
      ring.y += (pos.y - ring.y) * 0.16;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        const scale = label ? 2.6 : hovering ? 1.8 : 1;
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%) scale(${scale})`;
        ringRef.current.style.backgroundColor = label ? "hsl(42 62% 58% / 0.95)" : "transparent";
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[200] w-1.5 h-1.5 rounded-full bg-[var(--gold)] pointer-events-none"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[199] w-9 h-9 rounded-full border border-[hsl(42_62%_58%/0.5)] pointer-events-none flex items-center justify-center transition-colors duration-300"
      >
        <div
          ref={labelRef}
          className="text-[7px] font-medium tracking-[0.2em] uppercase text-black opacity-0 transition-opacity duration-200 select-none"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
