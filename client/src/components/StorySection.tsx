export default function StorySection() {
  return (
    <section id="story" className="py-20 bg-coffee-light" data-testid="story-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <img 
                src="https://iteeha.coffee/images/aboutiteeha.png" 
                alt="About Iteeha" 
                className="h-16 w-auto"
                data-testid="story-logo"
              />
              <h2 className="font-inter font-bold text-4xl md:text-5xl text-coffee-brown" data-testid="story-title">
                Our Story
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none" data-testid="story-content">
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                <span className="font-semibold text-coffee-brown">"Iteeha"</span> roughly translates to <em>'as per tradition'</em>, and keeping that in mind, we adopted the virtue of doing <strong>'Basic but Beautiful'</strong>. We offer light and simple products, but beautifully done.
              </p>
              
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                We understand the importance of a well-made cup of coffee, and hence focus immensely on sourcing just the right beans, training our staff continually, and equipping our cafes with the best machines.
              </p>
              
              <p className="text-charcoal text-lg leading-relaxed mb-8">
                Tie that in with our warm service and you've got yourself an experience that will keep you coming back for more. Iteeha Coffee is a sanctuary for all those that are seeking a comforting cuppa and a moment to pause and reflect.
              </p>
            </div>
            
            <a 
              href="https://iteeha.coffee/about.html" 
              className="inline-flex items-center bg-coffee-brown text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-coffee-dark transition-all duration-300 transform hover:scale-105"
              data-testid="story-learn-more"
            >
              Learn More About Us
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Cozy coffee shop interior" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="story-image"
            />
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-lg animate-float" data-testid="story-feature-quality">
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8 text-coffee-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.5 3H6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2v9c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM16 17H8V9h8v8zm2-10H6V5h12v2z"/>
                </svg>
                <div>
                  <p className="font-inter font-semibold text-coffee-brown">Premium Quality</p>
                  <p className="text-sm text-gray-600">Carefully sourced beans</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-coffee-brown rounded-2xl p-6 shadow-lg text-white" style={{animation: 'float 3s ease-in-out infinite 1s'}} data-testid="story-feature-service">
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8 text-coffee-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <div>
                  <p className="font-inter font-semibold">Warm Service</p>
                  <p className="text-sm text-coffee-cream">From our heart to yours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
