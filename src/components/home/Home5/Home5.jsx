import React from "react";
import "./home5.css";
import chel from '../../../assets/чел.png'

export default function Home5() {
  return (
    <div className="home5">


      <div className="home5-content">
        <p className="subtitle">Отзывы</p>
        <h2 className="title">Что говорят наши покупатели?</h2>

        <div className="review-block">
          
          <div className="review-photo"><img src={chel}/></div>

          <div className="stars">
            ★★★★★
          </div>

          <p className="review-text">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>

          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <hr className="line" />

        <div className="stats">
          <div className="stat-item">
            <h3>100%</h3>
            <p>Органически</p>
          </div>

          <div className="stat-item">
            <h3>15</h3>
            <p>Продуктов<br />на рынке</p>
          </div>

          <div className="stat-item">
            <h3>150+</h3>
            <p>Торговых точек</p>
          </div>

          <div className="stat-item">
            <h3>5+</h3>
            <p>Лет на рынке</p>
          </div>
        </div>
      </div>


    </div>
  );
}
