import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import hero from "../Assets/hero-1.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <i><FontAwesomeIcon icon={faHand} /></i>
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <i><FontAwesomeIcon icon={faArrowRight} /></i>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
