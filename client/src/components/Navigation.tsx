import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 nav-shadow" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="https://iteeha.coffee/images/vfx.png" 
              alt="Iteeha Coffee Logo" 
              className="h-8 w-auto"
              data-testid="logo-image"
            />
            <span className="ml-2 font-inter font-bold text-xl text-coffee-brown" data-testid="logo-text">
              Iteeha
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="/"
                className="font-inter font-medium text-charcoal hover:text-coffee-brown transition-colors duration-300"
                data-testid="nav-home"
              >
                Home
              </a>
              <a 
                href="/about"
                className="font-inter font-medium text-charcoal hover:text-coffee-brown transition-colors duration-300"
                data-testid="nav-about"
              >
                About
              </a>
              <a 
                href="/menu"
                className="font-inter font-medium text-charcoal hover:text-coffee-brown transition-colors duration-300"
                data-testid="nav-menu"
              >
                Menu
              </a>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="font-inter font-medium text-charcoal hover:text-coffee-brown transition-colors duration-300"
                data-testid="nav-gallery"
              >
                Gallery
              </button>
              <a 
                href="/contact"
                className="font-inter font-medium text-charcoal hover:text-coffee-brown transition-colors duration-300"
                data-testid="nav-contact"
              >
                Contact
              </a>
              <a 
                href="https://order.iteeha.coffee/" 
                className="bg-coffee-brown text-white px-6 py-2 rounded-full font-medium hover:bg-coffee-dark transition-colors duration-300"
                data-testid="nav-order-now"
              >
                Order Now
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" data-testid="mobile-menu-trigger">
                  <Menu className="h-6 w-6 text-charcoal" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <a 
                    href="/"
                    className="text-left px-3 py-2 text-charcoal hover:text-coffee-brown font-inter text-lg"
                    data-testid="mobile-nav-home"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </a>
                  <a 
                    href="/about"
                    className="text-left px-3 py-2 text-charcoal hover:text-coffee-brown font-inter text-lg"
                    data-testid="mobile-nav-about"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </a>
                  <a 
                    href="/menu"
                    className="text-left px-3 py-2 text-charcoal hover:text-coffee-brown font-inter text-lg"
                    data-testid="mobile-nav-menu"
                    onClick={() => setIsOpen(false)}
                  >
                    Menu
                  </a>
                  <button 
                    onClick={() => scrollToSection('gallery')}
                    className="text-left px-3 py-2 text-charcoal hover:text-coffee-brown font-inter text-lg"
                    data-testid="mobile-nav-gallery"
                  >
                    Gallery
                  </button>
                  <a 
                    href="/contact"
                    className="text-left px-3 py-2 text-charcoal hover:text-coffee-brown font-inter text-lg"
                    data-testid="mobile-nav-contact"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </a>
                  <a 
                    href="https://order.iteeha.coffee/" 
                    className="mx-3 mt-4 bg-coffee-brown text-white px-4 py-3 rounded-full text-center font-medium block"
                    data-testid="mobile-nav-order-now"
                  >
                    Order Now
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
