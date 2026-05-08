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
      <MusicPortfolio />
      <ScoreSamples />
      <About />
      <FilmShowcase />
      <Contact />

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
                href="mailto:Raam19.music@gmail.com"
                className="text-sm text-gray-300 hover:text-primary transition-colors font-light"
              >
                Raam19.music@gmail.com
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
