import { Play } from "lucide-react";
import { useState } from "react";
import { SiSpotify, SiYoutube, SiAmazonmusic, SiApplemusic } from "react-icons/si";

const MusicPortfolio = () => {
  const [currentEmbed, setCurrentEmbed] = useState<string | null>(null);

  const tracks = [
    {
      title: "YAARA MERE",
      genre: "Pop",
      duration: "3:44",
      embedUrl: "https://open.spotify.com/embed/track/09mkYZZTF5dJ2IUUonqnXT?utm_source=generator&autoplay=1&theme=0",
      links: {
        spotify: "https://open.spotify.com/track/09mkYZZTF5dJ2IUUonqnXT",
        youtube: "https://youtu.be/VCN5JZpiRtQ",
        amazon: "https://music.amazon.in/albums/B09NY5M3X3?trackAsin=B09NY6L7NL",
        apple: "https://music.apple.com/us/song/yaara-mere-original/1601628305",
      }
    },
    {
      title: "NEE",
      genre: "EDM",
      duration: "3:50",
      embedUrl: "https://open.spotify.com/embed/track/1SjAwPxnCO0lJYKeQ5IUOY?utm_source=generator&autoplay=1",
      links: {
        spotify: "https://open.spotify.com/track/1SjAwPxnCO0lJYKeQ5IUOY",
        youtube: "https://www.youtube.com/watch?v=j8g97RNGHJg",
        amazon: "https://music.amazon.com/tracks/B09VYM1B1W?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_xvnpr2yr8asKncyJc1toKovaL",
        apple: "https://music.apple.com/us/song/nee-original/1614594259",
      }
    },
    {
      title: "SAARAM NEE",
      genre: "Pop / Indie Fusion",
      duration: "3:44",
      embedUrl: "https://open.spotify.com/embed/track/77Vli5whn1N6bskoz7pPCT?utm_source=generator&autoplay=1",
      links: {
        spotify: "https://open.spotify.com/track/77Vli5whn1N6bskoz7pPCT",
        youtube: "https://youtu.be/nEgw00li--A",
        amazon: "https://music.amazon.com/tracks/B0BS1J787D?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_Bj8OuQe4he3ztnuDCeBwCdfry",
        apple: "https://music.apple.com/us/album/yaara-mere-original-single/1601628298",
      }
    },
    {
      title: "NAA JAANE KYUN",
      genre: "Indie Pop",
      duration: "5:44",
      embedUrl: "https://open.spotify.com/embed/track/371VHqmR785b6KlYCWTO94?utm_source=generator&autoplay=1",
      links: {
        spotify: "https://open.spotify.com/track/371VHqmR785b6KlYCWTO94",
        youtube: "https://youtu.be/U7WfBxhYf0c",
        amazon: "https://music.amazon.com/tracks/B09BFKZB2V?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_JG8yRp74OVEDs0DctCMTd0bWf",
        apple: "https://music.apple.com/us/song/naa-jaane-kyun-original/1587566124",
      }
    },
    {
      title: "BUDDY SONG",
      genre: "Folk",
      duration: "4:05",
      embedUrl: "https://open.spotify.com/embed/track/1V9FujwMo3mTNF1KIX83iz?utm_source=generator&autoplay=1",
      links: {
        spotify: "https://open.spotify.com/track/1V9FujwMo3mTNF1KIX83iz",
        youtube: "https://youtu.be/eb2hgNggUEk",
        amazon: "https://music.amazon.com/tracks/B09F9YMBCH?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_6xYKp8KMVVQTkndhjhI28WAo5",
        apple: "https://music.apple.com/us/album/the-buddy-song-original-single/1584294787",
      }
    },
  ];

  const handlePreviewPlay = (embedUrl: string) => {
    setCurrentEmbed(embedUrl);
  };

  return (
    <section id="music" className="section-padding bg-black">
      <div className="container-custom max-w-6xl">
        <h2 
          className="text-4xl md:text-5xl font-extralight mb-4 text-center text-white"
          style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.15em' }}
        >
          ORIGINAL SINGLES
        </h2>
        <div className="w-24 h-0.5 bg-white mx-auto mb-16"></div>
        
        {/* Tracks List */}
        <div className="max-w-5xl mx-auto space-y-0 animate-fade-in pb-32">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-between py-8 px-6 border-b border-white/10 hover:bg-white/5 transition-all"
            >
              {/* Track Info - Left */}
              <div className="flex-1">
                <h3 
                  className="text-4xl md:text-5xl font-extralight mb-2 tracking-tight text-white transition-all duration-300 hover:scale-[1.03] inline-block"
                  style={{ 
                    fontFamily: "'Raleway', sans-serif", 
                    letterSpacing: '0.10em',
                    filter: 'drop-shadow(0 0 0px rgba(0,0,0,0))',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 0px rgba(0,0,0,0))';
                  }}
                >
                  {track.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {track.genre} · {track.duration}
                </p>
              </div>

              {/* Platform Links & Play Button - Right */}
              <div className="flex items-center gap-5 flex-shrink-0 ml-6">
                {/* Preview Play Button - FIRST */}
                <button
                  onClick={() => handlePreviewPlay(track.embedUrl)}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
                  aria-label={`Play preview of ${track.title}`}
                >
                  <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                </button>

                {/* Spotify Link */}
                <a
                  href={track.links.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`Listen to ${track.title} on Spotify`}
                >
                  <SiSpotify className="w-5 h-5" />
                </a>

                {/* YouTube Link */}
                <a
                  href={track.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`Watch ${track.title} on YouTube`}
                >
                  <SiYoutube className="w-5 h-5" />
                </a>

                {/* Apple Music Link */}
                <a
                  href={track.links.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`Listen to ${track.title} on Apple Music`}
                >
                  <SiApplemusic className="w-5 h-5" />
                </a>

                {/* Amazon Music Link */}
                <a
                  href={track.links.amazon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`Listen to ${track.title} on Amazon Music`}
                >
                  <SiAmazonmusic className="w-5 h-5" />
                </a>

                {/* More Options */}
                <button
                  className="text-gray-400 hover:text-white transition-colors w-8 text-center"
                  aria-label="More options"
                >
                  <span className="text-xl leading-none">···</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Embedded Player */}
        {currentEmbed && (
          <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10 p-4 z-50 animate-fade-in">
            <div className="container-custom max-w-5xl mx-auto relative">
              <button
                onClick={() => setCurrentEmbed(null)}
                className="absolute -top-2 right-0 text-gray-400 hover:text-white transition-colors text-2xl leading-none"
                aria-label="Close player"
              >
                ×
              </button>
              <iframe
                key={currentEmbed}
                src={currentEmbed}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MusicPortfolio;
