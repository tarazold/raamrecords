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
            <h2 className="text-5xl md:text-6xl font-bold mb-6">About Master Pete</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                With over a decade of experience in music production, I've dedicated my life to crafting
                immersive sonic experiences that resonate with listeners on a deep emotional level.
              </p>
              <p>
                My approach combines technical precision with artistic intuition. Every project is an
                opportunity to push boundaries and explore new sonic territories, from intimate acoustic
                arrangements to expansive electronic soundscapes.
              </p>
              <p>
                Working from my custom-designed studio, I use a blend of vintage analog gear and
                cutting-edge digital tools to create productions that are both timeless and contemporary.
              </p>
              <div className="pt-4">
                <h3 className="text-2xl font-bold text-foreground mb-3">Philosophy</h3>
                <p className="italic">
                  "Music is emotion translated into sound. My role is to ensure that translation is as
                  pure and powerful as possible."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
