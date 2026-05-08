import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MusicPortfolio from "@/components/MusicPortfolio";
import ScoreSamples from "@/components/ScoreSamples";
import About from "@/components/About";
import FilmShowcase from "@/components/FilmShowcase";
import Contact from "@/components/Contact";
import SocialSidebar from "@/components/SocialSidebar";
import { SiSpotify, SiInstagram, SiX, SiYoutube, SiApplemusic, SiSoundcloud } from "react-icons/si";

const Index = () => {
  const [currentEmbed, setCurrentEmbed] = useState<{ url: string; title: string } | null>(null);
  const currentYear = new Date().getFullYear();

  const footerNav = [
    { label: "Original Singles", href: "#music" },
    { label: "Score Samples", href: "#score-samples" },
    { label: "About", href: "#about" },
    { label: "Filmography", href: "#films" },
    { label: "Contact", href: "#contact" },
  ];

  const footerSocials = [
    { Icon: SiSpotify, href: "https://open.spotify.com/artist/2u9drGMWG4VhfZ3tJTvAn4", label: "Spotify" },
    { Icon: SiApplemusic, href: "https://music.apple.com/us/artist/sriram-venkatesh/1584294787", label: "Apple Music" },
    { Icon: SiYoutube, href: "https://www.youtube.com/@raam-records", label: "YouTube" },
    { Icon: SiSoundcloud, href: "https://soundcloud.com/raamrecords21", label: "SoundCloud" },
    { Icon: SiInstagram, href: "https://www.instagram.com/_raam96/", label: "Instagram" },
    { Icon: SiX, href: "https://twitter.com/raam_records", label: "X" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <SocialSidebar />
      <Hero />
      <MusicPortfolio currentEmbed={currentEmbed} setCurrentEmbed={setCurrentEmbed} />
      <ScoreSamples currentEmbed={currentEmbed} setCurrentEmbed={setCurrentEmbed} />
      <About />
      <FilmShowcase />
      <Contact />

      {/* Shared sticky player */}
      {currentEmbed && (
        <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 z-50 animate-fade-in shadow-[0_-10px_40px_rgba(0,0,0,0.6)]">
          <div className="container-custom max-w-5xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className="text-[10px] font-extralight uppercase text-gray-500 tracking-[0.3em] hidden sm:inline"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  Now Playing
                </span>
                <span className="text-gray-600 hidden sm:inline">·</span>
                <span
                  className="text-sm font-extralight uppercase text-white tracking-[0.2em] truncate"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  {currentEmbed.title}
                </span>
              </div>
              <button
                onClick={() => setCurrentEmbed(null)}
                className="text-gray-400 hover:text-white transition-colors flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
                aria-label="Close player"
              >
                <span className="text-xl leading-none">×</span>
              </button>
            </div>
            <div className="rounded-lg overflow-hidden bg-black border border-white/10">
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
      <footer className="bg-black border-t border-white/10 mt-24">
        <div className="container-custom px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-12 gap-12 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-5">
              <div
                className="text-xl font-extralight text-white mb-4"
                style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.2em' }}
              >
                SRIRAM VENKATESH
              </div>
              <p className="text-sm text-gray-400 font-light leading-relaxed max-w-sm">
                Music Producer, Composer & Sound Engineer. Founder of{" "}
                <span className="text-white">Raam Records</span> — an independent label
                from Chennai, India.
              </p>
            </div>

            {/* Navigate */}
            <div className="md:col-span-3">
              <div
                className="text-[10px] font-extralight uppercase text-gray-500 mb-5"
                style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.3em' }}
              >
                Explore
              </div>
              <ul className="flex flex-col gap-3">
                {footerNav.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-300 hover:text-primary transition-colors font-light"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="md:col-span-4">
              <div
                className="text-[10px] font-extralight uppercase text-gray-500 mb-5"
                style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.3em' }}
              >
                Listen & Follow
              </div>
              <div className="flex flex-wrap items-center gap-5 mb-6">
                {footerSocials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </a>
                ))}
              </div>
              <a
                href="mailto:contact@raamrecords.com"
                className="text-sm text-gray-300 hover:text-primary transition-colors font-light"
              >
                contact@raamrecords.com
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-xs text-gray-500 font-light tracking-wide">
              © {currentYear} Sriram Venkatesh · Raam Records. All rights reserved.
            </p>
            <p
              className="text-[10px] text-gray-600 font-extralight uppercase"
              style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.3em' }}
            >
              Chennai · India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
