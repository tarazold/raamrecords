import { Play } from "lucide-react";
import { useState } from "react";
import { SiSoundcloud } from "react-icons/si";

const ScoreSamples = () => {
  const [currentEmbed, setCurrentEmbed] = useState<{ url: string; title: string } | null>(null);

  const tracks = [
    {
      title: "RAPAAN KUTHU",
      url: "https://soundcloud.com/raamrecords21/rapaan-kuthu",
      shareUrl: "https://on.soundcloud.com/UWnXZss4Z5bfZdGbXw",
    },
    {
      title: "THE NINTH HYMN",
      url: "https://soundcloud.com/raamrecords21/the-ninth-hymn",
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
      url: "https://soundcloud.com/raamrecords21/in-her-memories",
      shareUrl: "https://on.soundcloud.com/TSdQHqiUpaWrsSFXqO",
    },
  ];

  const buildEmbed = (trackUrl: string) =>
    `https://w.soundcloud.com/player/?url=${encodeURIComponent(
      trackUrl
    )}&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&color=%23ffffff`;

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

        {currentEmbed && (
          <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 z-50 animate-fade-in shadow-[0_-10px_40px_rgba(0,0,0,0.6)]">
            <div className="container-custom max-w-5xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className="text-[10px] font-extralight uppercase text-gray-500 tracking-[0.3em] hidden sm:inline"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    Now Playing
                  </span>
                  <span className="text-gray-600 hidden sm:inline">·</span>
                  <span
                    className="text-sm font-extralight uppercase text-white tracking-[0.2em] truncate"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    {currentEmbed.title}
                  </span>
                </div>
                <button
                  onClick={() => setCurrentEmbed(null)}
                  className="text-gray-400 hover:text-white transition-colors flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
                  aria-label="Close player"
                >
                  <span className="text-xl leading-none">×</span>
                </button>
              </div>
              <div className="rounded-lg overflow-hidden bg-black border border-white/10">
                <iframe
                  key={currentEmbed.url}
                  src={currentEmbed.url}
                  width="100%"
                  height="120"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={`${currentEmbed.title} player`}
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScoreSamples;
