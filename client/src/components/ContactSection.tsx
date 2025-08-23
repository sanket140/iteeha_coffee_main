export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-coffee-light" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl md:text-5xl text-coffee-brown mb-6" data-testid="contact-title">
            Visit Us
          </h2>
          <p className="text-charcoal text-lg max-w-2xl mx-auto" data-testid="contact-subtitle">
            Come experience the warmth of Iteeha Coffee. We're here to serve you the perfect cup.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Location */}
          <div className="text-center" data-testid="contact-location">
            <div className="bg-coffee-brown text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-inter font-semibold text-xl text-coffee-brown mb-3">Location</h3>
            <p className="text-charcoal">
              Find us at our cozy locations<br />
              across the city.<br />
              Visit iteeha.coffee for details
            </p>
          </div>
          
          {/* Hours */}
          <div className="text-center" data-testid="contact-hours">
            <div className="bg-coffee-brown text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </div>
            <h3 className="font-inter font-semibold text-xl text-coffee-brown mb-3">Hours</h3>
            <p className="text-charcoal">
              Monday - Friday: 7AM - 8PM<br />
              Saturday - Sunday: 8AM - 9PM<br />
              Holidays: 9AM - 6PM
            </p>
          </div>
          
          {/* Contact */}
          <div className="text-center" data-testid="contact-info">
            <div className="bg-coffee-brown text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-inter font-semibold text-xl text-coffee-brown mb-3">Contact</h3>
            <p className="text-charcoal">
              Get in touch with us<br />
              for inquiries and orders.<br />
              hello@iteeha.coffee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
