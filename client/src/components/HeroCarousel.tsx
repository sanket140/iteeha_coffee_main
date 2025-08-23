import { useHeroSlider } from "@/hooks/use-hero-slider";
import { Button } from "@/components/ui/button";

export default function HeroCarousel() {
  const { currentSlide, setCurrentSlide } = useHeroSlider();

  const slides = [
    {
      id: 0,
      image: "https://iteeha.coffee/images/vfx.png",
      title: "Coffee. Craft. Conversations.",
      subtitle: "",
      isLogo: true
    },
    {
      id: 1,
      image: "https://iteeha.coffee/images/urmi.jpg",
      title: "Step in, relax,",
      subtitle: "",
      isLogo: false
    },
    {
      id: 2,
      image: "https://iteeha.coffee/images/e6.jpg",
      title: "And",
      subtitle: "",
      isLogo: false
    },
    {
      id: 3,
      image: "https://iteeha.coffee/images/e2.jpg",
      title: "let us take care of the rest.",
      subtitle: "",
      isLogo: false
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center coffee-texture" data-testid="hero-carousel">
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Hero Slides */}
      <div className="w-full h-screen relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            data-testid={`hero-slide-${index}`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              {slide.isLogo ? (
                <div className="flex flex-col items-center">
                  <img 
                    src={slide.image} 
                    alt="Iteeha Coffee Logo" 
                    className="h-32 md:h-48 w-auto mb-8 animate-fade-in"
                  />
                  <h1 className="font-inter font-bold text-5xl md:text-7xl text-white mb-8 animate-fade-in">
                    {slide.title}
                  </h1>
                </div>
              ) : (
                <h1 className="font-inter font-bold text-5xl md:text-7xl text-white mb-8 animate-fade-in">
                  {slide.title}
                </h1>
              )}
              <a 
                href="/order-landing" 
                className="inline-block bg-coffee-gold text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-coffee-brown transition-all duration-300 transform hover:scale-105 animate-float"
                data-testid="hero-order-button"
              >
                Order Now
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Hero Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3" data-testid="hero-dots">
        {slides.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-3 h-3 rounded-full p-0 transition-all duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => setCurrentSlide(index)}
            data-testid={`hero-dot-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
