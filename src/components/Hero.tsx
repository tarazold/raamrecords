import { useEffect, useRef, useState } from "react";
import WaveCanvas from "@/components/fx/WaveCanvas";
import Magnetic from "@/components/fx/Magnetic";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // trigger the entrance masks after the preloader curtain lifts
    const t = setTimeout(() => setMounted(true), 2100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (titleRef.current && y < window.innerHeight) {
          titleRef.current.style.transform = `translateY(${y * 0.25}px)`;
          titleRef.current.style.opacity = `${1 - y / (window.innerHeight * 0.9)}`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const line = (text: string, delay: number, className = "") => (
    <span className={`mask-line ${mounted ? "is-visible" : ""}`}>
      <span className={className} style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}>
        {text}
      </span>
    </span>
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Interactive waveform floor */}
      <div className="absolute inset-x-0 bottom-0 h-[45vh] opacity-90">
        <WaveCanvas />
      </div>

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 40%, transparent 40%, hsl(30 6% 5% / 0.85) 100%)" }}
      />

      {/* Content */}
      <div ref={titleRef} className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full pointer-events-none">
        <div
          className={`flex items-center gap-5 mb-12 md:mb-16 transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <span className="w-12 h-px bg-[var(--gold)]" />
          <p className="text-[11px] md:text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Composer · Producer · Sound Engineer
          </p>
        </div>

        <h1
          className="font-display font-bold uppercase leading-[1.02] tracking-tight text-[var(--bone)]"
          style={{ fontSize: "clamp(1.8rem, 7.2vw, 6.5rem)" }}
        >
          {line("Sriram", 0)}
          {line("Venkatesh", 150, "text-outline")}
        </h1>

        <div
          className={`mt-14 md:mt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-12 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <p className="font-serif-italic text-xl md:text-2xl text-[hsl(40_18%_92%/0.75)] max-w-md leading-relaxed">
            Scores that breathe, songs that stay — sound crafted in Chennai, heard everywhere.
          </p>

          <div className="flex gap-4 pointer-events-auto">
            <Magnetic>
              <button
                onClick={() => scrollTo("music")}
                data-cursor="hover"
                className="group relative overflow-hidden border border-[var(--gold)] text-gold px-8 h-14 text-[11px] uppercase tracking-[0.3em] font-medium transition-colors duration-500 hover:text-[var(--ink)]"
              >
                <span className="absolute inset-0 bg-[var(--gold)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                <span className="relative">Listen</span>
              </button>
            </Magnetic>
            <Magnetic>
              <button
                onClick={() => scrollTo("contact")}
                data-cursor="hover"
                className="group relative overflow-hidden border border-[hsl(40_18%_92%/0.25)] text-[var(--bone)] px-8 h-14 text-[11px] uppercase tracking-[0.3em] font-medium transition-colors duration-500 hover:text-[var(--ink)]"
              >
                <span className="absolute inset-0 bg-[var(--bone)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                <span className="relative">Collaborate</span>
              </button>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 transition-opacity duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1400ms" }}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-[var(--gold)] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
