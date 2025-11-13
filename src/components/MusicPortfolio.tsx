import { Play } from "lucide-react";
import { useState } from "react";
import { SiSpotify, SiYoutube, SiAmazonmusic, SiApplemusic } from "react-icons/si";

const MusicPortfolio = () => {
  const [currentEmbed, setCurrentEmbed] = useState<string | null>(null);

  const tracks = [
    {
      title: "NEE",
      genre: "EDM",
      duration: "3:50",
      embedUrl: "https://open.spotify.com/embed/track/1SjAwPxnCO0lJYKeQ5IUOY?utm_source=generator&theme=0&autoplay=1",
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
      embedUrl: "https://open.spotify.com/embed/track/77Vli5whn1N6bskoz7pPCT?utm_source=generator&theme=0&autoplay=1",
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
      embedUrl: "https://open.spotify.com/embed/track/371VHqmR785b6KlYCWTO94?utm_source=generator&theme=0&autoplay=1",
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
      embedUrl: "https://open.spotify.com/embed/track/1V9FujwMo3mTNF1KIX83iz?utm_source=generator&theme=0&autoplay=1",
      links: {
        spotify: "https://open.spotify.com/track/1V9FujwMo3mTNF1KIX83iz",
        youtube: "https://youtu.be/eb2hgNggUEk",
        amazon: "https://music.amazon.com/tracks/B09F9YMBCH?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_6xYKp8KMVVQTkndhjhI28WAo5",
        apple: "https://music.apple.com/us/album/the-buddy-song-original-single/1584294787",
      }
    },
  ];

  const handlePlay = (embedUrl: string, trackTitle: string) => {
    setCurrentEmbed(embedUrl);
    // Analytics logging
    console.log(`Play clicked: ${trackTitle}`);
  };

  return (
    <>
      <section id="music" className="section-padding bg-background">
        <div className="container-custom max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Music</h2>
          
          {/* Tracks List */}
          <div className="max-w-4xl mx-auto space-y-1 animate-fade-in pb-32">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="group relative flex items-center justify-between p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all"
              >
                {/* Track Info - Left */}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-1 tracking-tight">{track.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {track.genre} · {track.duration}
                  </p>
                </div>

                {/* Platform Links & Play Button - Right */}
                <div className="flex items-center gap-4 flex-shrink-0 ml-6">
                  {/* Spotify Link */}
                  <a
                    href={track.links.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Listen to ${track.title} on Spotify`}
                  >
                    <SiSpotify className="w-5 h-5" />
                  </a>

                  {/* Play Button */}
                  <button
                    onClick={() => handlePlay(track.embedUrl, track.title)}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all"
                    aria-label={`Play ${track.title}`}
                  >
                    <Play className="w-4 h-4 text-foreground ml-0.5" fill="currentColor" />
                  </button>

                  {/* More Options Placeholder */}
                  <button
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="More options"
                  >
                    <span className="text-xl">···</span>
                  </button>

                  {/* YouTube Link */}
                  <a
                    href={track.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Watch ${track.title} on YouTube`}
                  >
                    <SiYoutube className="w-5 h-5" />
                  </a>

                  {/* Apple Music Link */}
                  <a
                    href={track.links.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Listen to ${track.title} on Apple Music`}
                  >
                    <SiApplemusic className="w-5 h-5" />
                  </a>

                  {/* Amazon Music Link */}
                  <a
                    href={track.links.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Listen to ${track.title} on Amazon Music`}
                  >
                    <SiAmazonmusic className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Bottom Player */}
      {currentEmbed && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-lg border-t border-border p-3 sm:p-4 animate-fade-in">
          <div className="container-custom max-w-2xl mx-auto relative">
            <button
              onClick={() => setCurrentEmbed(null)}
              className="absolute -top-2 right-0 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors z-10"
              aria-label="Close player"
            >
              ×
            </button>
            <iframe
              key={currentEmbed}
              src={currentEmbed}
              allow="autoplay; encrypted-media; fullscreen; clipboard-write"
              frameBorder="0"
              className="w-full h-20 sm:h-24 rounded-lg"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPortfolio;
