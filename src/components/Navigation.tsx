import { useState, useEffect } from "react";
import { SiSpotify, SiInstagram, SiX, SiYoutube } from "react-icons/si";

/**
 * Minimal fixed bar (wordmark + clock + menu trigger) that opens a fullscreen
 * overlay with staggered oversized links — the menu is a destination, not a
 * dropdown.
 */
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        })
      );
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = ["home", "music", "score-samples", "about", "films", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: "Home", href: "#home", index: "01" },
    { label: "Singles", href: "#music", index: "02" },
    { label: "Scores", href: "#score-samples", index: "03" },
    { label: "About", href: "#about", index: "04" },
    { label: "Films", href: "#films", index: "05" },
    { label: "Contact", href: "#contact", index: "06" },
  ];

  const socials = [
    { Icon: SiSpotify, href: "https://open.spotify.com/artist/2u9drGMWG4VhfZ3tJTvAn4", label: "Spotify" },
    { Icon: SiInstagram, href: "https://www.instagram.com/_raam96/", label: "Instagram" },
    { Icon: SiX, href: "https://twitter.com/raam_records", label: "X" },
    { Icon: SiYoutube, href: "https://www.youtube.com/@raam-records", label: "YouTube" },
  ];

  const scrollToSection = (href: string) => {
    setOpen(false);
    // wait for the overlay to start closing so the scroll isn't janky
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-500 ${
          isScrolled && !open ? "bg-[hsl(30_6%_5%/0.85)] backdrop-blur-md border-b border-white/5" : ""
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          <button
            onClick={() => scrollToSection("#home")}
            data-cursor="hover"
            className="font-display font-bold text-base tracking-tight text-[var(--bone)] uppercase"
          >
            Sriram V<span className="text-gold">.</span>
          </button>

          <div className="flex items-center gap-8">
            <span className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-muted-foreground tabular-nums">
              Chennai — {time} IST
            </span>
            <button
              onClick={() => setOpen(!open)}
              data-cursor="hover"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="group flex items-center gap-3"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--bone)]">
                {open ? "Close" : "Menu"}
              </span>
              <span className="relative w-8 h-3 flex flex-col justify-between">
                <span
                  className={`block h-px bg-[var(--bone)] transition-all duration-500 origin-center ${
                    open ? "rotate-45 translate-y-[5.5px]" : "group-hover:w-1/2 w-full"
                  }`}
                />
                <span
                  className={`block h-px bg-[var(--gold)] transition-all duration-500 origin-center ${
                    open ? "-rotate-45 -translate-y-[5.5px]" : "w-full group-hover:w-full"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen overlay menu */}
      <div
        className={`fixed inset-0 z-[110] bg-[var(--ink)] transition-[clip-path] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          open ? "[clip-path:inset(0_0_0%_0)]" : "[clip-path:inset(0_0_100%_0)] pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto w-full">
          <div className="flex flex-col">
            {navItems.map((item, i) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                data-cursor="hover"
                className="group flex items-baseline gap-8 py-4 md:py-5 text-left border-b border-white/5 overflow-hidden"
              >
                <span
                  className="font-display text-xs text-gold tabular-nums transition-transform duration-700"
                  style={{
                    transform: open ? "translateY(0)" : "translateY(120%)",
                    transitionDelay: open ? `${200 + i * 60}ms` : "0ms",
                  }}
                >
                  {item.index}
                </span>
                <span
                  className={`font-display font-medium uppercase leading-tight tracking-tight transition-all duration-700 group-hover:translate-x-4 group-hover:text-gold ${
                    activeSection === item.href.slice(1) ? "text-gold" : "text-[var(--bone)]"
                  }`}
                  style={{
                    fontSize: "clamp(1.8rem, 5.5vh, 3.25rem)",
                    transform: open ? "translateY(0)" : "translateY(120%)",
                    transitionDelay: open ? `${200 + i * 60}ms` : "0ms",
                  }}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          <div
            className="mt-16 md:mt-20 flex items-center justify-between transition-opacity duration-700"
            style={{ opacity: open ? 1 : 0, transitionDelay: open ? "650ms" : "0ms" }}
          >
            <div className="flex items-center gap-6">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-cursor="hover"
                  className="text-white/50 hover:text-gold transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <a
              href="mailto:contact@raamrecords.com"
              data-cursor="hover"
              className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground hover:text-gold transition-colors"
            >
              contact@raamrecords.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
