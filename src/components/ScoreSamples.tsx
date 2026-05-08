import { Play } from "lucide-react";
import { SiSoundcloud } from "react-icons/si";

interface ScoreSamplesProps {
  currentEmbed: { url: string; title: string } | null;
  setCurrentEmbed: (embed: { url: string; title: string } | null) => void;
}

const ScoreSamples = ({ currentEmbed, setCurrentEmbed }: ScoreSamplesProps) => {

  const tracks = [
    {
      title: "RAPAAN KUTHU",
      url: "https://soundcloud.com/raamrecords21/rapankuthu",
      shareUrl: "https://on.soundcloud.com/UWnXZss4Z5bfZdGbXw",
    },
    {
      title: "THE NINTH HYMN",
      url: "https://soundcloud.com/raamrecords21/the-antagonist",
      shareUrl: "https://on.soundcloud.com/V63S9RV2AuVsDvtgGx",
    },
    {
      title: "GRATITUDE",
      url: "https://soundcloud.com/raamrecords21/gratitude",
      shareUrl: "https://on.soundcloud.com/xywGw6oHy2ytv6cfgh",
    },
    {
      title: "HERO WITHIN YOU",
      url: "https://soundcloud.com/raamrecords21/hero-within-you",
      shareUrl:
        "https://soundcloud.com/raamrecords21/hero-within-you?si=737faba7900f44ee8b19c5244616b445",
    },
    {
      title: "IN HER MEMORIES",
      url: "https://soundcloud.com/raamrecords21/her-memories",
      shareUrl: "https://on.soundcloud.com/TSdQHqiUpaWrsSFXqO",
    },
  ];

  const buildEmbed = (trackUrl: string) =>
    `https://w.soundcloud.com/player/?url=${encodeURIComponent(
      trackUrl
    )}&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false&color=%23ff3b7f`;

  const handlePreviewPlay = (trackUrl: string, title: string) => {
    setCurrentEmbed({ url: buildEmbed(trackUrl), title });
  };

  return (
    <section id="score-samples" className="section-padding bg-black">
      <div className="container-custom max-w-6xl">
        <h2
          className="text-4xl md:text-5xl font-extralight mb-4 text-center text-white"
          style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: "0.15em" }}
        >
          SCORE SAMPLES
        </h2>
        <div className="w-24 h-0.5 bg-white mx-auto mb-16"></div>

        <div className="max-w-5xl mx-auto space-y-0 animate-fade-in pb-32">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-between py-8 px-6 border-b border-white/10 hover:bg-white/5 transition-all"
            >
              <div className="flex-1">
                <h3
                  className="text-4xl md:text-5xl font-extralight tracking-tight text-white transition-all duration-300 hover:scale-[1.03] inline-block"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    letterSpacing: "0.10em",
                    filter: "drop-shadow(0 0 0px rgba(0,0,0,0))",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter =
                      "drop-shadow(0 10px 30px rgba(0,0,0,0.5))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter =
                      "drop-shadow(0 0 0px rgba(0,0,0,0))";
                  }}
                >
                  {track.title}
                </h3>
              </div>

              <div className="flex items-center gap-5 flex-shrink-0 ml-6">
                <button
                  onClick={() => handlePreviewPlay(track.url, track.title)}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
                  aria-label={`Play preview of ${track.title}`}
                >
                  <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                </button>

                <a
                  href={track.shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`Listen to ${track.title} on SoundCloud`}
                >
                  <SiSoundcloud className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ScoreSamples;
