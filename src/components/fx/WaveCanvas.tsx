import { useEffect, useRef } from "react";

/**
 * Mouse-reactive waveform. A row of thin gold bars oscillates like an audio
 * meter; bars near the pointer surge in amplitude and brightness, so moving
 * across the canvas feels like dragging a hand through sound.
 */
const WaveCanvas = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf: number;
    let width = 0;
    let height = 0;
    const mouse = { x: -9999, y: 0, active: false };
    // seeds give each bar a stable random character
    const seeds: number[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);
      const t = now / 1000;
      const gap = 7;
      const barCount = Math.ceil(width / gap);
      while (seeds.length < barCount) seeds.push(Math.random() * Math.PI * 2);

      const mid = height / 2;

      for (let i = 0; i < barCount; i++) {
        const x = i * gap;
        const seed = seeds[i];

        // layered sines = organic idle motion
        const idle =
          Math.sin(t * 1.1 + i * 0.18 + seed) * 0.5 +
          Math.sin(t * 0.6 + i * 0.07) * 0.35 +
          Math.sin(t * 2.3 + seed * 3) * 0.15;

        let amp = 8 + Math.abs(idle) * 22;

        // pointer proximity surge
        let glow = 0;
        if (mouse.active) {
          const dist = Math.abs(x - mouse.x);
          const influence = Math.max(0, 1 - dist / 220);
          const surge = influence * influence;
          amp += surge * height * 0.32 * (0.6 + Math.abs(Math.sin(t * 5 + i)));
          glow = surge;
        }

        const alpha = 0.14 + Math.abs(idle) * 0.18 + glow * 0.6;
        ctx.fillStyle = `hsl(42 62% ${58 + glow * 20}% / ${Math.min(alpha, 0.95)})`;
        ctx.fillRect(x, mid - amp, 2, amp * 2);
      }

      raf = requestAnimationFrame(draw);
    };

    const drawStatic = () => {
      // reduced motion: render one calm frame, no animation loop
      resize();
      ctx.clearRect(0, 0, width, height);
      const gap = 7;
      const mid = height / 2;
      for (let x = 0; x < width; x += gap) {
        const amp = 8 + Math.abs(Math.sin(x * 0.02)) * 22;
        ctx.fillStyle = "hsl(42 62% 58% / 0.2)";
        ctx.fillRect(x, mid - amp, 2, amp * 2);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduced) {
      drawStatic();
    } else {
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mouseout", onLeave);
      raf = requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={`block w-full h-full ${className}`} aria-hidden="true" />;
};

export default WaveCanvas;
