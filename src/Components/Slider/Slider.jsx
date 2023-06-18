import React, { useState } from 'react';
import chosen from './chosen.jpg';
import passion from './passion.jpg';
import paul from './paul-movie-hero.jpg'
import thecase from './the-case.jpg'
import './Slider.css'
import movies from '../Home/db';



const Slider = () => {
  const images = movies.filter(movie=>movie.slider==="yes")
  console.log(images)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider">
      <img
        src={images[currentImageIndex].titleImg}
        alt={`Image ${currentImageIndex + 1}`}
        className="slider-image"
      />
      <div className="slider-navigation">
       <div className="left">
       <button className="slider-button" onClick={handlePrev}>Previous</button>
       </div>
        <div className="right">
        <button className="slider-button" onClick={handleNext}>Next</button>
        </div>
      </div>
     
    </div>
  );
};

export default Slider;
