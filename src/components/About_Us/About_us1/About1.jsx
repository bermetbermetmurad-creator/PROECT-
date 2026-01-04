import React from "react";
import "./about1.css";
import about1 from '../../../assets/about1.png'

const About1 = () => {
  return (
    <div className="about1">
      <img className="about1-img"  src={about1} />
      <h2 className="about1-title">О нас</h2>
    </div>
  );
};

export default About1;
