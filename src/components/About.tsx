import producerStudio from "@/assets/producer-studio.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in order-2 md:order-1">
            <div className="relative">
              <img
                src={producerStudio}
                alt="Master Pete in the studio"
                className="rounded-lg shadow-[0_0_50px_hsl(var(--primary)/0.2)] w-full h-auto"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-slow order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Artist</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Sriram Venkatesh is a Music Producer, Composer, and Sound Engineer from Chennai, India, 
                with over a decade of experience in the film and independent music industry. A certified 
                Music Producer from Beatfactory Academy, Mumbai, he has worked on film scores, commercials, 
                and independent projects that blend classical composition with modern production.
              </p>
              <p>
                In 2022, he launched his independent label, <strong className="text-foreground">Raam Records</strong>, 
                featuring his original releases now streaming across all major platforms. Sriram's music stands 
                out for its emotional depth, technical precision, and a distinctive sound that bridges tradition 
                and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
