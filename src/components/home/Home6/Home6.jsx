import React from "react";
import "./home6.css";

import buter from "../../../assets/buter.png";
import buter1 from "../../../assets/buter1.webp";
import buter2 from "../../../assets/buter2.webp";
import buter3 from "../../../assets/buter3.webp";
import { Link } from "react-router-dom";

export default function Home6() {
  return (
    <div className="home6-container">
      <h2 className="home6-title">Лучшие предложения месяца</h2>

      <Link to="catalog" className="home6-button">
        Смотреть все <span className="dot"></span>
      </Link>

      <div className="home6-cards">
        {[buter, buter1, buter2, buter3].map((img, i) => (
          <div className="home6-card" key={i}>
            <span className="tag">Масла</span>
            <div className="img-box">
              <img src={img} alt="product" />
            </div>
            <p className="product-text">Масло тыквенное, 250мл</p>
          </div>
        ))}
      </div>
    </div>
  );
}
