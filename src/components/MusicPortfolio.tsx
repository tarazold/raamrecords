import { Play, Music2 as SiAmazonmusic } from "lucide-react";
import { SiSpotify, SiYoutube, SiApplemusic } from "react-icons/si";
import SectionHeading from "@/components/fx/SectionHeading";
import Reveal from "@/hooks/use-reveal";

interface MusicPortfolioProps {
  currentEmbed: { url: string; title: string } | null;
  setCurrentEmbed: (embed: { url: string; title: string } | null) => void;
}

const MusicPortfolio = ({ currentEmbed, setCurrentEmbed }: MusicPortfolioProps) => {
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
      },
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
      },
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
      },
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
      },
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
      },
    },
  ];

  const platformIcons = (track: (typeof tracks)[number]) => [
    { Icon: SiSpotify, href: track.links.spotify, label: "Spotify" },
    { Icon: SiYoutube, href: track.links.youtube, label: "YouTube" },
    { Icon: SiApplemusic, href: track.links.apple, label: "Apple Music" },
    { Icon: SiAmazonmusic, href: track.links.amazon, label: "Amazon Music" },
  ];

  return (
    <section id="music" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading index="02" label="Discography" title="Original Singles" />

        <div className="border-t border-white/10">
          {tracks.map((track, index) => {
            const isPlaying = currentEmbed?.title === track.title;
            return (
              <Reveal key={track.title} delay={index * 60}>
                <div
                  onClick={() => setCurrentEmbed({ url: track.embedUrl, title: track.title })}
                  data-cursor-label="Play"
                  className={`group relative grid grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-14 py-10 md:py-14 px-2 md:px-8 border-b border-white/[0.07] transition-colors duration-500 cursor-pointer ${
                    isPlaying ? "bg-[hsl(42_62%_58%/0.05)]" : "hover:bg-white/[0.03]"
                  }`}
                >
                  {/* Index / EQ */}
                  <div className="w-12 md:w-16 flex items-end justify-start">
                    {isPlaying ? (
                      <div className="flex items-end gap-[3px] h-6" aria-label="Now playing">
                        {[0, 1, 2, 3].map((i) => (
                          <span
                            key={i}
                            className="eq-bar h-6"
                            style={{ animationDelay: `${i * 0.15}s` }}
                          />
                        ))}
                      </div>
                    ) : (
                      <span className="font-display text-sm md:text-base text-muted-foreground tabular-nums group-hover:text-gold transition-colors duration-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div className="min-w-0">
                    <h3
                      className={`font-display font-medium uppercase tracking-tight leading-none truncate transition-all duration-500 group-hover:translate-x-3 ${
                        isPlaying ? "text-gold" : "text-[var(--bone)]"
                      }`}
                      style={{ fontSize: "clamp(1.25rem, 2.6vw, 2.1rem)" }}
                    >
                      {track.title}
                    </h3>
                    <p className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground mt-3">
                      {track.genre} — {track.duration}
                    </p>
                  </div>

                  {/* Platforms */}
                  <div
                    className="flex items-center gap-4 md:gap-5 md:opacity-0 md:translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {platformIcons(track).map(({ Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${track.title} on ${label}`}
                        data-cursor="hover"
                        className="text-white/40 hover:text-gold transition-colors hidden sm:block"
                      >
                        <Icon className="w-[18px] h-[18px]" />
                      </a>
                    ))}
                    <span
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        isPlaying
                          ? "border-[var(--gold)] bg-[var(--gold)]"
                          : "border-white/20 group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)]"
                      }`}
                    >
                      <Play
                        className={`w-4 h-4 ml-0.5 transition-colors duration-500 ${
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

export default MusicPortfolio;
