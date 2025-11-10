import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music2, Play } from "lucide-react";

const MusicPortfolio = () => {
  const tracks = [
    {
      title: "Midnight Echoes",
      description: "A deep, atmospheric journey through analog synths and organic textures.",
      embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1234567890",
    },
    {
      title: "Urban Pulse",
      description: "Hard-hitting drums with melodic elements. Perfect for high-energy moments.",
      embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1234567891",
    },
    {
      title: "Ethereal Dreams",
      description: "Ambient soundscapes designed for introspection and calm.",
      embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1234567892",
    },
  ];

  return (
    <section id="music" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Music2 className="w-8 h-8 text-primary animate-glow-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Music Portfolio</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore a selection of tracks showcasing diverse production styles and sonic landscapes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                  <Play className="w-5 h-5" />
                  {track.title}
                </CardTitle>
                <CardDescription>{track.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Music2 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Audio Player Placeholder</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Connect SoundCloud, Spotify, or upload audio files
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicPortfolio;
