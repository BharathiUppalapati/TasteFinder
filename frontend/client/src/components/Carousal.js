//Carousal.js
import React from 'react';
import './Carousal.css'; // Import the CSS file for Carousal styles

export default function Carousal() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" id='carousel'>
          <div className="carousel-caption">
          </div>
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900X700/?Veg staters" className="d-block w-100 carousel-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900X700/?Biryani" className="d-block w-100 carousel-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900X700/?pastry" className="d-block w-100 carousel-img" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
