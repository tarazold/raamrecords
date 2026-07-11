import { useEffect, useRef } from "react";
import producerStudio from "@/assets/producer-studio.jpg";
import { Headphones, AudioWaveform, Radio } from "lucide-react";
import SectionHeading from "@/components/fx/SectionHeading";
import Reveal, { useReveal } from "@/hooks/use-reveal";

const About = () => {
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const quote = useReveal<HTMLQuoteElement>();

  // Parallax: the portrait drifts slower than the scroll inside its mask
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const wrap = imgWrapRef.current;
        const img = imgRef.current;
        if (!wrap || !img) return;
        const rect = wrap.getBoundingClientRect();
        const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        img.style.transform = `scale(1.15) translateY(${progress * -6}%)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const services = [
    {
      Icon: Headphones,
      title: "Production",
      body: "Full-scale music production from concept to final master, specializing in cinematic and electronic genres.",
    },
    {
      Icon: AudioWaveform,
      title: "Sound Design",
      body: "Custom sound creation for films, games, and immersive experiences using cutting-edge synthesis.",
    },
    {
      Icon: Radio,
      title: "Mixing & Mastering",
      body: "Professional audio engineering to ensure your tracks sound pristine across all playback systems.",
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading index="04" label="The Artist" title="Behind the Sound" />

        <div className="grid md:grid-cols-12 gap-16 md:gap-20 items-start">
          {/* Parallax portrait */}
          <Reveal className="md:col-span-5">
            <div ref={imgWrapRef} className="relative overflow-hidden aspect-[4/5]">
              <img
                ref={imgRef}
                src={producerStudio}
                alt="Sriram Venkatesh in the studio"
                className="w-full h-full object-cover will-change-transform"
                style={{ transform: "scale(1.15)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30_6%_5%/0.5)] to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--bone)]">
                  Raam Records — EST. 2022
                </p>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <div className="md:col-span-6 md:col-start-7 space-y-7 text-base md:text-lg leading-[1.9] text-[hsl(40_18%_92%/0.65)]">
            <Reveal delay={100}>
              <p className="font-serif-italic text-2xl md:text-3xl text-[var(--bone)] leading-snug mb-12">
                A decade of chasing the note that makes a scene unforgettable.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p>
                Sriram Venkatesh is a Music Producer, Composer, and Sound Engineer from Chennai, with over
                a decade of experience in the film and independent music industry. A certified Music Producer
                from Beatfactory Academy, he has worked on film scores, commercials, and independent projects
                that blend classical composition with modern production.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p>
                In 2022, he launched his independent label,{" "}
                <strong className="text-[var(--bone)] font-normal">Raam Records</strong>, featuring his
                original releases now streaming across major platforms.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <p>
                He worked on the film score for <em className="not-italic text-[var(--bone)]">Sorry Day</em>{" "}
                alongside Samrat Awasthi, and is currently awaiting the release of his debut Tamil feature
                film <em className="not-italic text-[var(--bone)]">Eerapatham Kattrum Mazhai</em>.
              </p>
            </Reveal>

            {/* Stats strip */}
            <Reveal delay={420}>
              <div className="grid grid-cols-3 gap-8 pt-12 mt-8 border-t border-white/[0.07]">
                {[
                  { value: "10+", label: "Years in Sound" },
                  { value: "2", label: "Feature Films" },
                  { value: "5", label: "Original Singles" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display font-medium text-3xl md:text-4xl text-gold leading-none mb-3">
                      {stat.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Philosophy quote */}
        <blockquote
          ref={quote.ref}
          className={`reveal ${quote.visible ? "is-visible" : ""} mt-36 md:mt-52 max-w-3xl mx-auto text-center`}
        >
          <span className="font-display text-gold text-5xl leading-none block mb-10">“</span>
          <p className="font-serif-italic text-2xl md:text-3xl text-[hsl(40_18%_92%/0.8)] leading-[1.6]">
            Great music is built on clarity, emotion, and purpose. Every sound I design aims to be
            unique, precise, and immersive — blending modern energy with pure, crystal-clear tones.
          </p>
        </blockquote>

        {/* Services */}
        <div className="mt-36 md:mt-52 grid md:grid-cols-3 gap-px bg-white/[0.07] border border-white/[0.07]">
          {services.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 120} className="bg-[var(--ink)]">
              <div
                data-cursor="hover"
                className="group h-full px-10 py-16 md:py-20 transition-colors duration-500 hover:bg-[hsl(42_62%_58%/0.04)]"
              >
                <div className="flex items-center justify-between mb-12">
                  <Icon
                    className="w-6 h-6 text-gold transition-transform duration-500 group-hover:-translate-y-1"
                    strokeWidth={1.25}
                  />
                  <span className="font-display text-xs text-muted-foreground tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display font-medium uppercase text-base tracking-tight text-[var(--bone)] mb-5">
                  {title}
                </h3>
                <p className="text-sm text-[hsl(40_18%_92%/0.5)] leading-[1.8]">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
