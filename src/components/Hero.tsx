import React from "react";
import Navbar from "./Navbar";
import '../app/styles/hero.css';

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero-container"
    >
      <Navbar />
      <div className="hero-content">
        <div></div>

        <div className="hero-text">
          <div className="hero-msin"> 
            <p data-aos="zoom-out-down">I'm</p>
            <p data-aos="zoom-out-down">Faiza</p>
            <p data-aos="zoom-out-down">Anum</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero