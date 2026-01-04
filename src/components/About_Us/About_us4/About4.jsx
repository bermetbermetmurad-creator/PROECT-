import React from "react";
import "./about4.css";
import buterr from '../../../assets/oo4.webp'
import buterr1 from '../../../assets/oo1.webp'
import buterr2 from '../../../assets/oo2.webp'
import buterr3 from '../../../assets/oo3.webp'
import { useNavigate } from "react-router-dom";






export default function About4() {
  const navigate = useNavigate();

  const goToOffers = () => {
    navigate("/offers-page");
  };

  return (
    <section className="about4-section">
      <div className="about4-container">
        <div className="about4-header">
          <h2 className="about4-title">Лучшие предложения месяца</h2>


          <button className="about4-button" onClick={goToOffers}>
            Смотреть все <span className="about4-button-info"></span>
          </button>
        </div>

        <div className="about4-cards-grid">

          <div className="about4-card">
            <span className="about4-tag">Масла</span>
            <div className="about4-img-box">

              <img src={buterr} alt="Масло тыквенное" className="about4-product-img" />
            </div>
            <p className="about4-product-text">Масло линянное </p>
          </div>

          <div className="about4-card">
            <span className="about4-tag">Масла</span>
            <div className="about4-img-box">
              <img src={buterr1} alt="Масло тыквенное" className="about4-product-img" />
            </div>
            <p className="about4-product-text">Масло подсолнечное</p>
          </div>

          <div className="about4-card">
            <span className="about4-tag">Масла</span>
            <div className="about4-img-box">
              <img src={buterr3} alt="Масло тыквенное" className="about4-product-img" />
            </div>
            <p className="about4-product-text">Масло оливковае</p>
          </div>


          <div className="about4-card">
            <span className="about4-tag">Масла</span>
            <div className="about4-img-box">
              <img src={buterr2} alt="Масло тыквенное" className="about4-product-img" />
            </div>
            <p className="about4-product-text">Масло какосовое</p>
          </div>
        </div>
      </div>
    </section>
  );
}