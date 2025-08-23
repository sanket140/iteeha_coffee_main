import { homeGalleryImages } from "@/lib/gallery-data";

export default function HomeGallery() {
  return (
    <section id="gallery" className="py-20 bg-white" data-testid="home-gallery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl md:text-5xl text-coffee-brown mb-6" data-testid="home-gallery-title">
            Gallery
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6" data-testid="home-gallery-grid">
          {homeGalleryImages.map((image, index) => (
            <a
              key={index}
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
              className={`gallery-item overflow-hidden rounded-xl cursor-pointer gallery-hover ${image.aspectRatio} bg-coffee-light`}
              data-testid={`home-gallery-item-${index}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}