import { Button } from "@/components/ui/button";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Subtle radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in-slow max-w-5xl mx-auto">
        <h1 
          className="text-7xl sm:text-8xl md:text-9xl font-extralight tracking-wider mb-6"
          style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.15em' }}
        >
          SRIRAM VENKATESH
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 font-light tracking-wide">
          Music Producer · Sound Designer · Audio Engineer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="default" 
            size="lg" 
            onClick={scrollToMusic}
            className="border border-primary/50 hover:border-primary"
          >
            Explore Music
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={scrollToContact}
            className="border border-border hover:border-foreground"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
