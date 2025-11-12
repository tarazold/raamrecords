import { Play, Music, Youtube, Apple, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const MusicPortfolio = () => {
  const [currentEmbed, setCurrentEmbed] = useState<string | null>(null);

  const tracks = [
    {
      title: "NEE",
      description: "Cinematic | Ambient",
      year: "2022",
      embedUrl: "https://embed.music.apple.com/us/song/nee-original/1614594259?app=music&autoplay=true",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80",
      links: {
        spotify: "https://open.spotify.com/track/1SjAwPxnCO0lJYKeQ5IUOY",
        youtube: "https://www.youtube.com/watch?v=j8g97RNGHJg",
        amazon: "https://music.amazon.com/tracks/B09VYM1B1W?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_xvnpr2yr8asKncyJc1toKovaL",
        apple: "https://music.apple.com/us/song/nee-original/1614594259",
      }
    },
    {
      title: "Saaram Nee",
      description: "Romantic | Anthemic",
      year: "2021",
      embedUrl: "https://open.spotify.com/embed/track/77Vli5whn1N6bskoz7pPCT?utm_source=generator&theme=0&autoplay=1",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80",
      links: {
        spotify: "https://open.spotify.com/track/77Vli5whn1N6bskoz7pPCT",
        youtube: "https://youtu.be/nEgw00li--A",
        amazon: "https://music.amazon.com/tracks/B0BS1J787D?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_Bj8OuQe4he3ztnuDCeBwCdfry",
        apple: "https://music.apple.com/us/album/yaara-mere-original-single/1601628298",
      }
    },
    {
      title: "Naa Jaane Kyun",
      description: "Indie | Chill",
      year: "2021",
      embedUrl: "https://embed.music.apple.com/us/song/naa-jaane-kyun-original/1587566124?app=music&autoplay=true",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80",
      links: {
        spotify: "https://open.spotify.com/track/6r53dsBDXS38eJm2uumOEf",
        youtube: "https://youtu.be/U7WfBxhYf0c",
        amazon: "https://music.amazon.com/tracks/B09BFKZB2V?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_JG8yRp74OVEDs0DctCMTd0bWf",
        apple: "https://music.apple.com/us/song/naa-jaane-kyun-original/1587566124",
      }
    },
    {
      title: "Buddy (The Buddy Song)",
      description: "Pop | Feel-good",
      year: "2021",
      embedUrl: "https://embed.music.apple.com/us/song/the-buddy-song-original/1584294789?app=music&autoplay=true",
      cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&q=80",
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
          
          {/* Tracks Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 animate-fade-in pb-32">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all"
              >
                {/* Cover Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={track.cover} 
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <button
                    onClick={() => handlePlay(track.embedUrl, track.title)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label={`Play ${track.title}`}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </button>
                </div>

                {/* Track Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{track.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {track.description} • {track.year}
                  </p>

                  {/* Platform Links */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:text-primary transition-colors"
                    >
                      <a
                        href={track.links.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Listen on Spotify"
                      >
                        <Music className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:text-primary transition-colors"
                    >
                      <a
                        href={track.links.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Watch on YouTube"
                      >
                        <Youtube className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:text-primary transition-colors"
                    >
                      <a
                        href={track.links.apple}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Listen on Apple Music"
                      >
                        <Apple className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:text-primary transition-colors"
                    >
                      <a
                        href={track.links.amazon}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Listen on Amazon Music"
                      >
                        <ShoppingBag className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
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
