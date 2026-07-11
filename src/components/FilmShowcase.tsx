import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import sorryDayPoster from "@/assets/sorry-day-poster.jpg";
import eerapadhamPoster from "@/assets/eerapadham-poster.jpg";
import SectionHeading from "@/components/fx/SectionHeading";
import Reveal from "@/hooks/use-reveal";

interface Film {
  title: string;
  subtitle: string;
  year: string;
  poster: string;
  imdbUrl: string;
}

/** 3D tilt card: the poster rotates toward the pointer, image zooms, meta lifts. */
const TiltCard = ({ film }: { film: Film }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    const inner = innerRef.current;
    if (!card || !inner || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    inner.style.transform = `rotateY(${px * 10}deg) rotateX(${py * -10}deg)`;
  };

  const onLeave = () => {
    if (innerRef.current) innerRef.current.style.transform = "rotateY(0) rotateX(0)";
  };

  return (
    <a
      ref={cardRef}
      href={film.imdbUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor-label="IMDb"
      className="group block"
      style={{ perspective: "1200px" }}
    >
      <div
        ref={innerRef}
        className="transition-transform duration-300 ease-out will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={film.poster}
            alt={`${film.title} poster`}
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30_6%_5%/0.7)] via-transparent to-transparent" />
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[hsl(30_6%_5%/0.6)] backdrop-blur flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <ArrowUpRight className="w-4 h-4 text-gold" />
          </div>
          <div className="absolute bottom-4 left-5">
            <span className="font-display text-xs text-gold tracking-[0.2em]">{film.year}</span>
          </div>
        </div>
        <div className="pt-8 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display font-medium uppercase tracking-tight text-lg md:text-xl text-[var(--bone)] group-hover:text-gold transition-colors duration-300 leading-snug">
              {film.title}
            </h3>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-4">
              {film.subtitle}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

const FilmShowcase = () => {
  const films: Film[] = [
    {
      title: "Eerapadham Kaatru Mazhai",
      subtitle: "Songs & Background Score",
      year: "Upcoming",
      poster: eerapadhamPoster,
      imdbUrl: "https://www.imdb.com/title/tt30576871/",
    },
    {
      title: "Sorry Day",
      subtitle: "Background Score · with Samrat Awasthi",
      year: "2022",
      poster: sorryDayPoster,
      imdbUrl: "https://www.imdb.com/title/tt17048292/",
    },
  ];

  return (
    <section id="films" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading index="05" label="On Screen" title="Filmography" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-24 md:gap-y-20">
          {films.map((film, i) => (
            <Reveal key={film.title} delay={i * 150} className={i === 1 ? "md:mt-32" : ""}>
              <TiltCard film={film} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmShowcase;
