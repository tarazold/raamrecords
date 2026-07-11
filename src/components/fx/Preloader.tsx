import { useEffect, useState } from "react";

/**
 * Intro preloader: counts to 100 while the name reveals, then the black
 * curtain lifts. Purely time-based (this is a static site — nothing real to
 * load) and skipped entirely for reduced-motion users.
 */
const Preloader = ({ onDone }: { onDone?: () => void }) => {
  const [count, setCount] = useState(0);
  const [lifting, setLifting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGone(true);
      onDone?.();
      return;
    }

    const start = performance.now();
    const duration = 1600;
    let raf: number;
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      cancelAnimationFrame(raf);
      setCount(100);
      setLifting(true);
      setTimeout(() => {
        setGone(true);
        onDone?.();
      }, 900);
    };

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out so the count decelerates into 100
      setCount(Math.round(100 * (1 - Math.pow(1 - t, 3))));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        finish();
      }
    };

    raf = requestAnimationFrame(tick);
    // hard cap: never trap the user behind the curtain if rAF stalls
    const fallback = setTimeout(finish, 2200);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
    };
  }, [onDone]);

  if (gone) return null;

  return (
    <div
      className="fixed inset-0 z-[300] bg-[var(--ink)] flex items-end justify-between px-6 md:px-12 pb-8 transition-transform duration-[900ms]"
      style={{
        transform: lifting ? "translateY(-100%)" : "translateY(0)",
        transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
      }}
      aria-hidden="true"
    >
      <div className="overflow-hidden">
        <div
          className="font-display font-bold uppercase text-[var(--bone)] text-2xl md:text-4xl tracking-tight"
          style={{
            transform: lifting ? "translateY(110%)" : "translateY(0)",
            transition: "transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        >
          Sriram Venkatesh<span className="text-gold">.</span>
        </div>
      </div>
      <div className="font-display font-bold text-6xl md:text-8xl text-gold tabular-nums leading-none">
        {count}
      </div>
    </div>
  );
};

export default Preloader;
