import sorryDayPoster from "@/assets/sorry-day-poster.jpg";
import eerapadhamPoster from "@/assets/eerapadham-poster.jpg";

const FilmShowcase = () => {
  const films = [
    {
      title: "Sorry Day",
      year: "2022",
      role: "Worked along with Samrat Awasthi",
      poster: sorryDayPoster,
      imdbUrl: "https://www.imdb.com/title/tt17048292/",
    },
    {
      title: "Eerapadham Kattru Mazhai",
      year: "Upcoming",
      role: "Composer",
      poster: eerapadhamPoster,
      imdbUrl: "https://www.imdb.com/title/tt30576871/",
    },
  ];

  return (
    <section id="films" className="section-padding bg-black">
      <div className="container-custom max-w-6xl">
        <h2 
          className="text-4xl md:text-5xl font-extralight mb-4 text-center text-white"
          style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.15em' }}
        >
          FILM WORKS
        </h2>
        <div className="w-24 h-0.5 bg-white mx-auto mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {films.map((film, index) => (
            <a
              key={index}
              href={film.imdbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative overflow-hidden bg-card rounded-lg transition-transform duration-300 hover:scale-105">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={film.poster}
                    alt={`${film.title} poster`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-1">{film.title}</h3>
                  <p className="text-sm text-gray-300 mb-1">{film.year}</p>
                  <p className="text-sm text-gray-400">{film.role}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmShowcase;
