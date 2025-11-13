import { Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { SiSpotify, SiYoutube, SiAmazonmusic, SiApplemusic } from "react-icons/si";

const MusicPortfolio = () => {
  const [playingTrack, setPlayingTrack] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const tracks = [
    {
      title: "NEE",
      genre: "EDM",
      duration: "3:50",
      previewUrl: "https://p.scdn.co/mp3-preview/YOUR_PREVIEW_URL_HERE", // Replace with actual Spotify preview URL
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
      previewUrl: "https://p.scdn.co/mp3-preview/YOUR_PREVIEW_URL_HERE", // Replace with actual Spotify preview URL
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
      previewUrl: "https://p.scdn.co/mp3-preview/YOUR_PREVIEW_URL_HERE", // Replace with actual Spotify preview URL
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
      previewUrl: "https://p.scdn.co/mp3-preview/YOUR_PREVIEW_URL_HERE", // Replace with actual Spotify preview URL
      links: {
        spotify: "https://open.spotify.com/track/1V9FujwMo3mTNF1KIX83iz",
        youtube: "https://youtu.be/eb2hgNggUEk",
        amazon: "https://music.amazon.com/tracks/B09F9YMBCH?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_6xYKp8KMVVQTkndhjhI28WAo5",
        apple: "https://music.apple.com/us/album/the-buddy-song-original-single/1584294787",
      }
    },
  ];

  const handlePlayPause = (index: number) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    // Pause all other tracks
    audioRefs.current.forEach((a, i) => {
      if (a && i !== index) {
        a.pause();
        a.currentTime = 0;
      }
    });

    // Toggle current track
    if (playingTrack === index) {
      audio.pause();
      setPlayingTrack(null);
    } else {
      audio.play();
      setPlayingTrack(index);
    }
  };

  // Handle audio ended event
  useEffect(() => {
    audioRefs.current.forEach((audio, index) => {
      if (audio) {
        audio.onended = () => {
          setPlayingTrack(null);
        };
      }
    });
  }, []);

  return (
    <section id="music" className="section-padding bg-black">
      <div className="container-custom max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-wider text-white">POPULAR RELEASES</h2>
        <div className="w-24 h-0.5 bg-white mx-auto mb-16"></div>
        
        {/* Tracks List */}
        <div className="max-w-5xl mx-auto space-y-0 animate-fade-in pb-32">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-between py-8 px-6 border-b border-white/10 hover:bg-white/5 transition-all"
            >
              {/* Hidden Audio Element */}
              <audio
                ref={(el) => (audioRefs.current[index] = el)}
                src={track.previewUrl}
                preload="metadata"
              />

              {/* Track Info - Left */}
              <div className="flex-1">
                <h3 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white">{track.title}</h3>
                <p className="text-sm text-gray-400">
                  {track.genre} · {track.duration}
                </p>
              </div>

              {/* Platform Links & Play Button - Right */}
              <div className="flex items-center gap-5 flex-shrink-0 ml-6">
                {/* Preview Play Button - FIRST */}
                <button
                  onClick={() => handlePlayPause(index)}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
                  aria-label={`${playingTrack === index ? 'Pause' : 'Play'} ${track.title}`}
                >
                  {playingTrack === index ? (
                    <Pause className="w-4 h-4 text-white" fill="currentColor" />
                  ) : (
                    <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                  )}
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
      </div>
    </section>
  );
};

export default MusicPortfolio;
