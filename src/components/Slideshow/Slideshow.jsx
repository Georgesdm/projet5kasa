import React, { useState } from 'react';
import './Slideshow.scss';
import leftArrow from '../../assets/left-arrow-icon.svg';
import rightArrow from '../../assets/right-arrow-icon.svg';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow-container">
        <div className="slideshow">
        {images.length > 1 && (
            <button className="left-arrow" onClick={prevSlide}>
                <img src={leftArrow} alt="Previous" />
            </button>
        )}
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        {images.length > 1 && (
            <button className="right-arrow" onClick={nextSlide}>
                <img src={rightArrow} alt="Next" />
            </button>
        )}
        {images.length > 1 && (
            <div className="slide-number">
            {currentIndex + 1}/{images.length}
            </div>
        )}
        </div>
    </div>
  );
};

export default Slideshow;