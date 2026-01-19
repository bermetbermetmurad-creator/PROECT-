import React from "react";
import { useNavigate } from "react-router-dom";
import "./home8.css";
import fonn1 from '../../../assets/желтый.png'
import fonn2 from '../../../assets/зеленый.jpg'
import fonn3 from '../../../assets/шоколад.png'

export default function Home8() {
  const navigate = useNavigate();

  return (
    <div className="home8-container">

      <div
        className="home8-card"
        onClick={() => navigate("/natural")}
      >
        <img className="home8-img" src={fonn1} alt="" />
        <div className="home8-label">Натуральные Масла</div>
      </div>

      <div
        className="home8-card"
        onClick={() => navigate("/newwr")}
      >
        <img className="home8-img" src={fonn2} alt="" />
        <div className="home8-label">НОВИНКИ</div>
      </div>


      <div className="home8-card"
      onClick={()=> navigate("/muka")}
        >
        <img className="home8-img" src={fonn3} alt="" />
        <div className="home8-label">Полезная мука</div>
      </div>

    </div>
  );
}
