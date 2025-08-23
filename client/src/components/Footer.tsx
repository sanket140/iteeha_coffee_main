export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-coffee-dark text-coffee-cream py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="https://iteeha.coffee/images/vfx.png" 
                alt="Iteeha Coffee Logo" 
                className="h-8 w-auto"
                data-testid="footer-logo"
              />
              <span className="ml-2 font-inter font-bold text-xl text-coffee-gold">Iteeha Coffee</span>
            </div>
            <p className="text-coffee-cream/80 mb-6 max-w-md" data-testid="footer-description">
              A sanctuary for coffee lovers seeking comfort, quality, and community. Basic but beautiful, as per tradition.
            </p>
            <div className="flex space-x-4" data-testid="footer-social">
              <a href="#" className="text-coffee-cream/60 hover:text-coffee-gold transition-colors duration-300" data-testid="social-facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/iteeha.coffee/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-cream/60 hover:text-coffee-gold transition-colors duration-300" 
                data-testid="social-instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.448 16.988c-1.297 0-2.448-1.207-2.448-2.448s1.151-2.448 2.448-2.448c1.297 0 2.448 1.207 2.448 2.448s-1.151 2.448-2.448 2.448z"/>
                </svg>
              </a>
              <a href="#" className="text-coffee-cream/60 hover:text-coffee-gold transition-colors duration-300" data-testid="social-twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div data-testid="footer-quick-links">
            <h4 className="font-inter font-semibold text-coffee-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-coffee-cream/80 hover:text-coffee-gold transition-colors duration-300"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('story')}
                  className="text-coffee-cream/80 hover:text-coffee-gold transition-colors duration-300"
                  data-testid="footer-link-story"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-coffee-cream/80 hover:text-coffee-gold transition-colors duration-300"
                  data-testid="footer-link-gallery"
                >
                  Gallery
                </button>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="text-coffee-cream/80 hover:text-coffee-gold transition-colors duration-300"
                  data-testid="footer-link-about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="/menu" 
                  className="text-coffee-cream/80 hover:text-coffee-gold transition-colors duration-300"
                  data-testid="footer-link-menu"
                >
                  Menu
                </a>
              </li>
              <li>
                <a 
                  href="/privacy" 
                  className="text-coffee-cream/80 hover:text-coffee-gold transition-colors duration-300"
                  data-testid="footer-link-privacy"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div data-testid="footer-order-links">
            <h4 className="font-inter font-semibold text-coffee-gold mb-4">Order</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://order.iteeha.coffee/" 
                  className="text-coffee-cream/80 hover:text-coffee-gold transition-colors duration-300"
                  data-testid="footer-link-order"
                >
                  Order Online
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-coffee-cream/80 hover:text-coffee-gold transition-colors duration-300"
                  data-testid="footer-link-visit"
                >
                  Visit Us
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-coffee-cream/20 mt-8 pt-8 text-center" data-testid="footer-copyright">
          <p className="text-coffee-cream/60">
            &copy; 2024 Iteeha Coffee. All rights reserved. | Coffee. Craft. Conversations.
          </p>
        </div>
      </div>
    </footer>
  );
}
