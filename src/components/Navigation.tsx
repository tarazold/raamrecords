import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SiSpotify, SiInstagram, SiX, SiYoutube } from "react-icons/si";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "music", "score-samples", "about", "films", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Original Singles", href: "#music" },
    { label: "Score Samples", href: "#score-samples" },
    { label: "About", href: "#about" },
    { label: "Filmography", href: "#films" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-lg shadow-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container-custom px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("#home")}
            className="text-xl font-light tracking-wide cursor-pointer bg-transparent border-none"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            SRIRAM VENKATESH
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`${
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-foreground"
                } hover:text-primary transition-colors cursor-pointer bg-transparent border-none text-base font-extralight`}
                style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.10em' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`${
                    activeSection === item.href.substring(1)
                      ? "text-primary"
                      : "text-foreground"
                  } hover:text-primary transition-colors text-left cursor-pointer bg-transparent border-none text-base py-2 font-extralight`}
                  style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.10em' }}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-6 pt-4 mt-2 border-t border-white/10">
                <a href="https://open.spotify.com/artist/2u9drGMWG4VhfZ3tJTvAn4" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="text-white/60 hover:text-primary transition-colors">
                  <SiSpotify className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/_raam96/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 hover:text-primary transition-colors">
                  <SiInstagram className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/raam_records" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-white/60 hover:text-primary transition-colors">
                  <SiX className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@raam-records" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/60 hover:text-primary transition-colors">
                  <SiYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
