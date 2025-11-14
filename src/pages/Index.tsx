import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MusicPortfolio from "@/components/MusicPortfolio";
import About from "@/components/About";
import FilmShowcase from "@/components/FilmShowcase";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MusicPortfolio />
      <About />
      <FilmShowcase />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container-custom px-6 text-center text-muted-foreground">
          <p>© 2025 Sriram Venkatesh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
