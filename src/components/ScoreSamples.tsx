import { Play } from "lucide-react";
import { SiSoundcloud } from "react-icons/si";
import SectionHeading from "@/components/fx/SectionHeading";
import Reveal from "@/hooks/use-reveal";

interface ScoreSamplesProps {
  currentEmbed: { url: string; title: string } | null;
  setCurrentEmbed: (embed: { url: string; title: string } | null) => void;
}

const ScoreSamples = ({ currentEmbed, setCurrentEmbed }: ScoreSamplesProps) => {
  const tracks = [
    {
      title: "RAPAAN KUTHU",
      mood: "Percussive / Folk Energy",
      url: "https://soundcloud.com/raamrecords21/rapankuthu",
      shareUrl: "https://on.soundcloud.com/UWnXZss4Z5bfZdGbXw",
    },
    {
      title: "THE NINTH HYMN",
      mood: "Dark Orchestral",
      url: "https://soundcloud.com/raamrecords21/the-antagonist",
      shareUrl: "https://on.soundcloud.com/V63S9RV2AuVsDvtgGx",
    },
    {
      title: "GRATITUDE",
      mood: "Warm / Uplifting",
      url: "https://soundcloud.com/raamrecords21/gratitude",
      shareUrl: "https://on.soundcloud.com/xywGw6oHy2ytv6cfgh",
    },
    {
      title: "HERO WITHIN YOU",
      mood: "Cinematic Rise",
      url: "https://soundcloud.com/raamrecords21/hero-within-you",
      shareUrl:
        "https://soundcloud.com/raamrecords21/hero-within-you?si=737faba7900f44ee8b19c5244616b445",
    },
    {
      title: "IN HER MEMORIES",
      mood: "Melancholic Strings",
      url: "https://soundcloud.com/raamrecords21/her-memories",
      shareUrl: "https://on.soundcloud.com/TSdQHqiUpaWrsSFXqO",
    },
    {
      title: "DARK IMPULSE",
      mood: "Tension / Thriller",
      url: "https://soundcloud.com/raamrecords21/dark-impulse",
      shareUrl: "https://on.soundcloud.com/hh87Rs0VBxCZ9RW6QR",
    },
  ];

  const buildEmbed = (trackUrl: string) =>
    `https://w.soundcloud.com/player/?url=${encodeURIComponent(
      trackUrl
    )}&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false&color=%23dfb75c`;

  return (
    <section id="score-samples" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading index="03" label="For Film & Screen" title="Score Samples" />

        {/* Two-column asymmetric grid of score cards */}
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-4">
          {tracks.map((track, index) => {
            const isPlaying = currentEmbed?.title === track.title;
            return (
              <Reveal key={track.title} delay={(index % 2) * 100} className={index % 2 === 1 ? "md:mt-16" : ""}>
                <div
                  onClick={() => setCurrentEmbed({ url: buildEmbed(track.url), title: track.title })}
                  data-cursor-label="Play"
                  className={`group relative flex items-center justify-between gap-6 py-10 md:py-12 px-2 md:px-4 border-b border-white/[0.07] transition-colors duration-500 cursor-pointer ${
                    isPlaying ? "bg-[hsl(42_62%_58%/0.05)]" : "hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-4 mb-4">
                      {isPlaying ? (
                        <div className="flex items-end gap-[2px] h-4" aria-label="Now playing">
                          {[0, 1, 2].map((i) => (
                            <span key={i} className="eq-bar h-4" style={{ animationDelay: `${i * 0.15}s` }} />
                          ))}
                        </div>
                      ) : (
                        <span className="font-display text-xs text-muted-foreground tabular-nums group-hover:text-gold transition-colors">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      )}
                      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                        {track.mood}
                      </span>
                    </div>
                    <h3
                      className={`font-display font-medium uppercase tracking-tight leading-none truncate transition-all duration-500 group-hover:translate-x-2 ${
                        isPlaying ? "text-gold" : "text-[var(--bone)]"
                      }`}
                      style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}
                    >
                      {track.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 shrink-0" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={track.shareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${track.title} on SoundCloud`}
                      data-cursor="hover"
                      className="text-white/40 hover:text-gold transition-colors"
                    >
                      <SiSoundcloud className="w-[18px] h-[18px]" />
                    </a>
                    <span
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        isPlaying
                          ? "border-[var(--gold)] bg-[var(--gold)]"
                          : "border-white/20 group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)]"
                      }`}
                    >
                      <Play
                        className={`w-3.5 h-3.5 ml-0.5 transition-colors duration-500 ${
                          isPlaying ? "text-black" : "text-white group-hover:text-black"
                        }`}
                        fill="currentColor"
                      />
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScoreSamples;
