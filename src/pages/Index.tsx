import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MusicPortfolio from "@/components/MusicPortfolio";
import ScoreSamples from "@/components/ScoreSamples";
import About from "@/components/About";
import FilmShowcase from "@/components/FilmShowcase";
import Contact from "@/components/Contact";
import Preloader from "@/components/fx/Preloader";
import CustomCursor from "@/components/fx/CustomCursor";
import Marquee from "@/components/fx/Marquee";
import Magnetic from "@/components/fx/Magnetic";
import { ArrowUp } from "lucide-react";
import { SiSpotify, SiInstagram, SiX, SiYoutube, SiApplemusic, SiSoundcloud } from "react-icons/si";

const MarqueeStrip = ({ words, reverse = false }: { words: string[]; reverse?: boolean }) => (
  <Marquee duration={44} reverse={reverse} className="py-8 md:py-12 border-y border-white/5">
    {words.map((word, i) => (
      <span key={i} className="flex items-center shrink-0">
        <span
          className={`font-display font-medium uppercase tracking-tight whitespace-nowrap ${
            i % 2 === 0 ? "text-outline" : "text-[hsl(40_18%_92%/0.55)]"
          }`}
          style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.75rem)" }}
        >
          {word}
        </span>
        <span className="mx-10 md:mx-16 w-1.5 h-1.5 rotate-45 bg-[hsl(42_62%_58%/0.7)] shrink-0" />
      </span>
    ))}
  </Marquee>
);

const Index = () => {
  const [currentEmbed, setCurrentEmbed] = useState<{ url: string; title: string } | null>(null);
  const currentYear = new Date().getFullYear();

  const footerSocials = [
    { Icon: SiSpotify, href: "https://open.spotify.com/artist/2u9drGMWG4VhfZ3tJTvAn4", label: "Spotify" },
    { Icon: SiApplemusic, href: "https://music.apple.com/us/artist/sriram-venkatesh/1584294787", label: "Apple Music" },
    { Icon: SiYoutube, href: "https://www.youtube.com/@raam-records", label: "YouTube" },
    { Icon: SiSoundcloud, href: "https://soundcloud.com/raamrecords21", label: "SoundCloud" },
    { Icon: SiInstagram, href: "https://www.instagram.com/_raam96/", label: "Instagram" },
    { Icon: SiX, href: "https://twitter.com/raam_records", label: "X" },
  ];

  return (
    <div className="min-h-screen grain">
      <Preloader />
      <CustomCursor />
      <Navigation />
      <Hero />

      <MarqueeStrip words={["Composer", "Producer", "Sound Designer", "Audio Engineer"]} />

      <MusicPortfolio currentEmbed={currentEmbed} setCurrentEmbed={setCurrentEmbed} />
      <ScoreSamples currentEmbed={currentEmbed} setCurrentEmbed={setCurrentEmbed} />

      <MarqueeStrip words={["Raam Records", "Chennai", "Est. 2022", "Independent"]} reverse />

      <About />
      <FilmShowcase />
      <Contact />

      {/* Shared sticky player */}
      {currentEmbed && (
        <div className="fixed bottom-0 left-0 right-0 bg-[hsl(30_6%_5%/0.95)] backdrop-blur-lg border-t border-[hsl(42_62%_58%/0.25)] z-[105] animate-fade-in shadow-[0_-10px_40px_rgba(0,0,0,0.6)]">
          <div className="container-custom max-w-5xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-4 min-w-0">
                <div className="flex items-end gap-[2px] h-3.5 shrink-0" aria-hidden="true">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="eq-bar h-3.5" style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
                <span className="text-[10px] uppercase text-muted-foreground tracking-[0.3em] hidden sm:inline">
                  Now Playing
                </span>
                <span className="font-display font-bold text-sm uppercase text-[var(--bone)] tracking-wide truncate">
                  {currentEmbed.title}
                </span>
              </div>
              <button
                onClick={() => setCurrentEmbed(null)}
                data-cursor="hover"
                className="text-muted-foreground hover:text-[var(--bone)] transition-colors flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
                aria-label="Close player"
              >
                <span className="text-xl leading-none">×</span>
              </button>
            </div>
            <div className="overflow-hidden border border-white/10">
              <iframe
                key={currentEmbed.url}
                src={currentEmbed.url}
                width="100%"
                height={currentEmbed.url.includes("soundcloud") ? 166 : 152}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`${currentEmbed.title} player`}
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 mt-24 relative overflow-hidden">
        <div className="container-custom px-6 md:px-12 pt-28 md:pt-40 pb-12">
          {/* Big CTA type */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 mb-28 md:mb-36">
            <a
              href="mailto:contact@raamrecords.com"
              data-cursor-label="Email"
              className="group block"
            >
              <span className="block text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-8">
                Have a project in mind?
              </span>
              <span
                className="font-display font-semibold uppercase leading-[1] tracking-tight text-[var(--bone)] group-hover:text-gold transition-colors duration-500"
                style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}
              >
                Let's Talk<span className="text-gold group-hover:text-[var(--bone)] transition-colors duration-500">.</span>
              </span>
            </a>

            <Magnetic>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                data-cursor="hover"
                aria-label="Back to top"
                className="w-16 h-16 rounded-full border border-white/20 hover:border-[var(--gold)] hover:bg-[var(--gold)] flex items-center justify-center transition-all duration-500 group shrink-0"
              >
                <ArrowUp className="w-5 h-5 text-white group-hover:text-black transition-colors" />
              </button>
            </Magnetic>
          </div>

          <div className="grid md:grid-cols-12 gap-12 pt-16 border-t border-white/[0.07]">
            <div className="md:col-span-5">
              <div className="font-display font-bold text-lg uppercase tracking-tight text-[var(--bone)] mb-3">
                Sriram Venkatesh<span className="text-gold">.</span>
              </div>
              <p className="text-sm text-[hsl(40_18%_92%/0.5)] leading-relaxed max-w-sm">
                Music Producer, Composer & Sound Engineer. Founder of{" "}
                <span className="text-[var(--bone)]">Raam Records</span> — an independent label from
                Chennai, India.
              </p>
            </div>

            <div className="md:col-span-4 md:col-start-7">
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
                Listen & Follow
              </div>
              <div className="flex flex-wrap items-center gap-5">
                {footerSocials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    data-cursor="hover"
                    className="text-white/40 hover:text-gold transition-colors"
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 md:text-right">
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
                Location
              </div>
              <p className="text-sm text-[hsl(40_18%_92%/0.5)]">
                Chennai
                <br />
                India
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-xs text-[hsl(35_8%_45%)]">
              © {currentYear} Sriram Venkatesh · Raam Records. All rights reserved.
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[hsl(35_8%_40%)]">
              Sound · Crafted · Here
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
