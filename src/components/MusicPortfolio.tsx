import { Music2, Music, Youtube, Apple, ShoppingBag, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const MusicPortfolio = () => {
  const [activeTab, setActiveTab] = useState<"all" | "singles">("all");
  const [expandedTrack, setExpandedTrack] = useState<number | null>(null);

  const tracks = [
    {
      title: "NEE",
      description: "Cinematic | Ambient",
      year: "2022",
      embedHtml: '<iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="175" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/song/nee-original/1614594259"></iframe>',
      links: {
        spotify: "https://open.spotify.com/track/1SjAwPxnCO0lJYKeQ5IUOY",
        youtube: "https://www.youtube.com/watch?v=j8g97RNGHJg",
        amazon: "https://music.amazon.com/tracks/B09VYM1B1W?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_xvnpr2yr8asKncyJc1toKovaL",
        apple: "https://music.apple.com/us/song/nee-original/1614594259",
      }
    },
    {
      title: "SAARAM NEE",
      description: "Romantic | Anthemic",
      year: "2021",
      embedHtml: '<iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/yaara-mere-original-single/1601628298"></iframe>',
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
      embedHtml: '<iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="175" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/song/naa-jaane-kyun-original/1587566124"></iframe>',
      links: {
        spotify: "https://open.spotify.com/track/6r53dsBDXS38eJm2uumOEf",
        youtube: "https://youtu.be/U7WfBxhYf0c",
        amazon: "https://music.amazon.com/tracks/B09BFKZB2V?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_JG8yRp74OVEDs0DctCMTd0bWf",
        apple: "https://music.apple.com/us/song/naa-jaane-kyun-original/1587566124",
      }
    },
    {
      title: "BUDDY SONG",
      description: "Pop | Feel-good",
      year: "2021",
      embedHtml: '<iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/the-buddy-song-original-single/1584294787"></iframe>',
      links: {
        spotify: "https://open.spotify.com/track/1V9FujwMo3mTNF1KIX83iz",
        youtube: "https://youtu.be/eb2hgNggUEk",
        amazon: "https://music.amazon.com/tracks/B09F9YMBCH?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_6xYKp8KMVVQTkndhjhI28WAo5",
        apple: "https://music.apple.com/us/album/the-buddy-song-original-single/1584294787",
      }
    },
  ];

  return (
    <section id="music" className="section-padding bg-background">
      <div className="container-custom max-w-6xl">
        {/* Tabs */}
        <div className="flex items-center gap-8 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("all")}
            className={`pb-4 px-2 text-lg font-semibold transition-colors relative ${
              activeTab === "all"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Albums
            {activeTab === "all" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("singles")}
            className={`pb-4 px-2 text-lg font-semibold transition-colors relative ${
              activeTab === "singles"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Soundtracks
            {activeTab === "singles" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        </div>

        {/* Tracks List */}
        <div className="space-y-0 animate-fade-in">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="border-b border-border py-8 group hover:bg-card/30 px-6 -mx-6 transition-colors"
              onMouseEnter={() => setExpandedTrack(index)}
              onMouseLeave={() => setExpandedTrack(null)}
            >
              <div className="flex items-start justify-between gap-6">
                {/* Left: Title & Description */}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-5xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {track.description} • {track.year}
                  </p>
                </div>

                {/* Right: Platform Icons */}
                <div className="flex items-center gap-3">
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
                  <div className="flex items-center justify-center w-10 h-10">
                    <ChevronDown
                      className={`w-5 h-5 transition-all text-muted-foreground ${
                        expandedTrack === index ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Expandable Player */}
              {expandedTrack === index && (
                <div
                  className="mt-6 animate-fade-in"
                  dangerouslySetInnerHTML={{ __html: track.embedHtml }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicPortfolio;
