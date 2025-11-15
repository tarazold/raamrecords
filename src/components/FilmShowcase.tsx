import sorryDayPoster from "@/assets/sorry-day-poster.jpg";
import eerapadhamPoster from "@/assets/eerapadham-poster.jpg";

const FilmShowcase = () => {
  const films = [
    {
      title: "Eerapadham Kaatru Mazhai",
      subtitle: "Songs & Background Score",
      poster: eerapadhamPoster,
      imdbUrl: "https://www.imdb.com/title/tt30576871/",
    },
    {
      title: "Sorry Day",
      subtitle: "Background Score alongside Samrat Awasthi",
      poster: sorryDayPoster,
      imdbUrl: "https://www.imdb.com/title/tt17048292/",
    },
  ];

  return (
    <section id="films" className="section-padding bg-black">
      <div className="container-custom max-w-6xl">
        <h2 
          className="text-4xl md:text-5xl font-extralight mb-4 text-center text-white"
          style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.15em' }}
        >
          FILMOGRAPHY
        </h2>
        <div className="w-24 h-0.5 bg-white mx-auto mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {films.map((film, index) => (
            <div key={index} className="flex flex-col items-center">
              <a
                href={film.imdbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full transition-all duration-300 hover:scale-[1.03]"
                style={{ filter: 'drop-shadow(0 0 0px rgba(0,0,0,0))' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 0px rgba(0,0,0,0))';
                }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={film.poster}
                      alt={`${film.title} poster`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </a>
              <h3 
                className="text-2xl md:text-3xl font-extralight mt-6 text-center text-white"
                style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.10em' }}
              >
                {film.title}
              </h3>
              {film.subtitle && (
                <p className="text-sm text-gray-400 mt-2 text-center">{film.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmShowcase;
