import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import StorySection from "@/components/StorySection";
import MenuPreview from "@/components/MenuPreview";
import GalleryGrid from "@/components/GalleryGrid";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";

export default function Home() {
  return (
    <>
      <title>Iteeha Coffee - Coffee. Craft. Conversations.</title>
      <meta name="description" content="Iteeha Coffee is a sanctuary for all those seeking a comforting cuppa and a moment to pause and reflect. Step in, relax, and let us take care of the rest." />
      <Navigation />
      <HeroCarousel />
      <StorySection />
      <MenuPreview />
      <GalleryGrid />
      <ContactSection />
      <Footer />
      <Lightbox />
      
      {/* Floating Order Button */}
      <a 
        href="https://order.iteeha.coffee/" 
        className="fixed bottom-6 right-6 bg-coffee-gold text-white p-4 rounded-full shadow-lg hover:bg-coffee-brown transition-all duration-300 transform hover:scale-110 z-40 animate-float"
        data-testid="floating-order-button"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.5 3H6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2v9c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM16 17H8V9h8v8zm2-10H6V5h12v2z"/>
        </svg>
      </a>
    </>
  );
}
