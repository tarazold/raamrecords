import producerStudio from "@/assets/producer-studio.jpg";
import { Headphones, AudioWaveform, Radio } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="container-custom">
        <h2
          className="text-4xl md:text-5xl font-extralight mb-4 text-center text-white"
          style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.15em' }}
        >
          THE ARTIST
        </h2>
        <div className="w-24 h-0.5 bg-white mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="animate-fade-in order-2 md:order-1">
            <div className="relative">
              <img
                src={producerStudio}
                alt="Sriram Venkatesh in the studio"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-slow order-1 md:order-2">
            <div className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed font-light">
              <p>
                Sriram Venkatesh is a Music Producer, Composer, and Sound Engineer from Chennai, with over
                a decade of experience in the film and independent music industry. A certified Music Producer
                from Beatfactory Academy, he has worked on film scores, commercials, and independent projects
                that blend classical composition with modern production.
              </p>
              <p>
                In 2022, he launched his independent label,{" "}
                <strong className="text-white font-normal">Raam Records</strong>,
                featuring his original releases now streaming across major platforms.
              </p>
              <p>
                He worked on the film score for <em className="not-italic text-white/90">Sorry Day</em> alongside
                Samrat Awasthi, and is currently awaiting the release of his debut Tamil feature film{" "}
                <em className="not-italic text-white/90">Eerapatham Kattrum Mazhai</em> later this year.
              </p>
              <p>
                Sriram's music stands out for its emotional depth, technical precision, and a distinctive
                sound that bridges tradition and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-32 max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-extralight mb-4 text-center text-white"
            style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.15em' }}
          >
            PHILOSOPHY
          </h2>
          <div className="w-24 h-0.5 bg-white mx-auto mb-16"></div>

          {/* Quote */}
          <p
            className="text-xl md:text-2xl text-gray-300 text-center mb-24 max-w-4xl mx-auto leading-relaxed font-extralight"
            style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.02em' }}
          >
            “I believe great music is built on clarity, emotion, and purpose.
            Every sound I design aims to be unique, precise, and immersive—blending
            modern energy with pure, crystal-clear tones that truly connect with listeners.”
          </p>

          {/* Services — minimal divider list */}
          <div className="grid md:grid-cols-3 gap-px bg-white/10 border-y border-white/10">
            {[
              { Icon: Headphones, title: "Production", body: "Full-scale music production from concept to final master, specializing in cinematic and electronic genres." },
              { Icon: AudioWaveform, title: "Sound Design", body: "Custom sound creation for films, games, and immersive experiences using cutting-edge synthesis." },
              { Icon: Radio, title: "Mixing & Mastering", body: "Professional audio engineering to ensure your tracks sound pristine across all playback systems." },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="bg-black px-8 py-12 text-center">
                <Icon className="w-6 h-6 text-white/70 mx-auto mb-6" strokeWidth={1.25} />
                <h3
                  className="text-sm font-extralight mb-4 text-white uppercase"
                  style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.25em' }}
                >
                  {title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light max-w-xs mx-auto">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
