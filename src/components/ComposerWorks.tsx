const ComposerWorks = () => {
  const works = [
    {
      title: "Coming Soon",
      year: "2025",
      role: "Composer",
      poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80",
      description: "Film and media projects in development"
    },
    {
      title: "Independent Projects",
      year: "2022-2024",
      role: "Producer & Composer",
      poster: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80",
      description: "Original music releases via Raam Records"
    },
  ];

  return (
    <section id="works" className="section-padding bg-card/30">
      <div className="container-custom max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Composer's Works</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {works.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all"
            >
              {/* Poster */}
              <div className="relative aspect-[2/3] overflow-hidden">
                <img 
                  src={work.poster} 
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                <p className="text-sm text-primary mb-2">{work.year} · {work.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{work.description}</p>
                <button className="text-sm text-foreground hover:text-primary transition-colors underline underline-offset-4">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComposerWorks;