import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToMusic = () => {
    document.getElementById("music")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated background image */}
      <div
        className="absolute inset-0 animate-slow-pan"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4
        }}
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in-slow max-w-5xl mx-auto">
        <h1
          className="font-extralight mb-6 leading-[1.05]"
          style={{
            fontFamily: "'Raleway', sans-serif",
            letterSpacing: '0.12em',
            fontSize: 'clamp(2.25rem, 9vw, 8rem)',
            wordSpacing: '0.05em'
          }}
        >
          SRIRAM VENKATESH
        </h1>
        <p
          className="text-sm sm:text-base md:text-lg text-muted-foreground mb-12 font-light"
          style={{ letterSpacing: '0.25em' }}
        >
          MUSIC PRODUCER · SOUND DESIGNER · AUDIO ENGINEER
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToMusic}
            className="border border-white/30 hover:border-white bg-transparent text-white font-extralight tracking-[0.2em] uppercase text-xs sm:text-sm h-12 px-8 rounded-none"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Explore Music
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToContact}
            className="border border-white/30 hover:border-white bg-transparent text-white font-extralight tracking-[0.2em] uppercase text-xs sm:text-sm h-12 px-8 rounded-none"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
