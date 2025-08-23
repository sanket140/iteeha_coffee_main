export default function MenuPreview() {
  const featuredItems = [
    {
      category: "Coffee",
      name: "House Cold Coffee",
      price: "₹250",
      description: "Our signature cold coffee blend - perfect for Mumbai weather",
      image: "https://images.unsplash.com/photo-1517701550320-4a46ba07c106?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      category: "Food", 
      name: "Classic Spiced Chicken Sandwich",
      price: "₹330",
      description: "Tender spiced chicken with fresh vegetables on artisan bread",
      image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      category: "Tea",
      name: "Black Tea Orange Blossom", 
      price: "₹160",
      description: "Premium black tea infused with delicate orange blossom notes",
      image: "https://images.unsplash.com/photo-1558618047-b2c0c05cd244?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      category: "Dessert",
      name: "Caramel & Chocolate Croissant",
      price: "₹520", 
      description: "Buttery croissant filled with rich caramel and chocolate",
      image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <section className="py-20 bg-white" data-testid="menu-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl md:text-5xl text-coffee-brown mb-6" data-testid="menu-preview-title">
            Taste the Tradition
          </h2>
          <p className="text-charcoal text-lg max-w-2xl mx-auto mb-8" data-testid="menu-preview-subtitle">
            Discover our carefully curated selection of coffee, food, and artisanal teas - Basic but Beautiful
          </p>
          <div className="flex justify-center items-center space-x-8 text-coffee-brown">
            <div className="text-center">
              <div className="text-2xl font-bold">₹500-1050</div>
              <div className="text-sm">Cost for Two</div>
            </div>
            <div className="w-px h-12 bg-coffee-brown/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">7:30 AM - 11:30 PM</div>
              <div className="text-sm">All Days</div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredItems.map((item, index) => (
            <div key={index} className="bg-coffee-light rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" data-testid={`menu-preview-item-${index}`}>
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-xs font-semibold text-coffee-gold uppercase tracking-wide">{item.category}</span>
                    <h3 className="font-inter font-semibold text-lg text-coffee-brown leading-tight">
                      {item.name}
                    </h3>
                  </div>
                  <span className="text-xl font-bold text-coffee-gold flex-shrink-0 ml-2">
                    {item.price}
                  </span>
                </div>
                <p className="text-charcoal text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="/menu" 
            className="inline-flex items-center bg-coffee-brown text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-coffee-dark transition-all duration-300 transform hover:scale-105"
            data-testid="menu-preview-view-all"
          >
            View Full Menu
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}