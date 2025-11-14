import producerStudio from "@/assets/producer-studio.jpg";
import { Headphones, AudioWaveform, Radio } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-black">
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

        {/* Philosophy Section */}
        <div className="mt-32 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Philosophy</h2>
          
          {/* Quote */}
          <p className="text-xl md:text-2xl text-gray-300 italic text-center mb-20 max-w-4xl mx-auto leading-relaxed">
            "I believe great music is built on clarity, emotion, and purpose.
            Every sound I design aims to be unique, precise, and immersive, blending modern energy with pure, crystal-clear tones that truly connect with listeners."
          </p>

          {/* Service Boxes */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Production */}
            <div className="bg-[#111] border border-white/10 rounded-lg p-8 text-center hover:border-white/20 transition-all">
              <div className="flex justify-center mb-6">
                <Headphones className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Production</h3>
              <p className="text-gray-400 leading-relaxed">
                Full-scale music production from concept to final master, specializing in cinematic and electronic genres.
              </p>
            </div>

            {/* Sound Design */}
            <div className="bg-[#111] border border-white/10 rounded-lg p-8 text-center hover:border-white/20 transition-all">
              <div className="flex justify-center mb-6">
                <AudioWaveform className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Sound Design</h3>
              <p className="text-gray-400 leading-relaxed">
                Custom sound creation for films, games, and immersive experiences using cutting-edge synthesis.
              </p>
            </div>

            {/* Mixing & Mastering */}
            <div className="bg-[#111] border border-white/10 rounded-lg p-8 text-center hover:border-white/20 transition-all">
              <div className="flex justify-center mb-6">
                <Radio className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Mixing & Mastering</h3>
              <p className="text-gray-400 leading-relaxed">
                Professional audio engineering to ensure your tracks sound pristine across all playback systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
