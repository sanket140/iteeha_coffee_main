import { useHeroSlider } from "@/hooks/use-hero-slider";
import { Button } from "@/components/ui/button";

export default function HeroCarousel() {
  const { currentSlide, setCurrentSlide } = useHeroSlider();

  const slides = [
    {
      id: 0,
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      title: "Coffee. Craft. Conversations.",
      subtitle: "Where tradition meets innovation in every carefully crafted cup"
    },
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      title: "Step in, relax,",
      subtitle: "Experience the art of coffee making in our welcoming space"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      title: "Let us take care of the rest.",
      subtitle: "Your sanctuary for comfort, quality, and community"
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
              <h1 className="font-inter font-bold text-5xl md:text-7xl text-white mb-6 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-coffee-cream mb-8 max-w-2xl mx-auto animate-slide-up">
                {slide.subtitle}
              </p>
              <a 
                href="https://order.iteeha.coffee/" 
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
