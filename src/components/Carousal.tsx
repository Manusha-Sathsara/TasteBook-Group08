import React, { useState, useCallback } from 'react';

interface CarouselProps {
  imageUrls: string[];
  cardTitle: string; // Optional, for alt text and accessibility
}

const Carousel: React.FC<CarouselProps> = ({ imageUrls, cardTitle }) => {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentCarouselIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  }, [imageUrls.length]);

  const prevSlide = useCallback(() => {
    setCurrentCarouselIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  }, [imageUrls.length]);

  if (!imageUrls || imageUrls.length === 0) {
    return <div>No images to display.</div>; // Handle case with no images
  }

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative h-96 overflow-hidden rounded-2xl shadow-md"> {/* Adjust height as needed */}
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentCarouselIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={url}
              alt={`${cardTitle} - Slide ${index + 1}`}
              className="w-full h-full object-cover block rounded-2xl"
            />
          </div>
        ))}
        {imageUrls.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-100 bg-opacity-50 hover:bg-opacity-75 text-gray-700 p-2 rounded-full focus:outline-none"
              aria-label="Previous Slide"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-100 bg-opacity-50 hover:bg-opacity-75 text-gray-700 p-2 rounded-full focus:outline-none"
              aria-label="Next Slide"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carousel;