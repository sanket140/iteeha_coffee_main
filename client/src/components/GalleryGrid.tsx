import { useState } from "react";
import { galleryImages } from "@/lib/gallery-data";

interface GalleryGridProps {
  onImageClick?: (imageSrc: string) => void;
}

export default function GalleryGrid({ onImageClick }: GalleryGridProps) {
  const handleImageClick = (imageSrc: string) => {
    if (onImageClick) {
      onImageClick(imageSrc);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white" data-testid="gallery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl md:text-5xl text-coffee-brown mb-6" data-testid="gallery-title">
            Gallery
          </h2>
          <p className="text-charcoal text-lg max-w-2xl mx-auto" data-testid="gallery-subtitle">
            Take a peek into our world of coffee craftsmanship, cozy atmosphere, and memorable moments
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-testid="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`gallery-item overflow-hidden rounded-xl cursor-pointer gallery-hover ${image.aspectRatio}`}
              onClick={() => handleImageClick(image.src)}
              data-testid={`gallery-item-${index}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
