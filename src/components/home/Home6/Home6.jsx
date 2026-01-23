import React from "react";
import "./home6.css";

import buter from "../../../assets/buter.png";
import buter1 from "../../../assets/buter1.webp";
import buter2 from "../../../assets/buter2.webp";
import buter3 from "../../../assets/buter3.webp";
import { Link } from "react-router-dom";

export default function Home6() {
  const products = [
    { img: buter, name: "Масло тыквенное", volume: "250мл", tag: "Масла" },
    { img: buter1, name: "Масло льняное", volume: "300мл", tag: "Масла" },
    { img: buter2, name: "Масло оливковое", volume: "500мл", tag: "Масла" },
    { img: buter3, name: "Масло кунжутное", volume: "200мл", tag: "Масла" },
  ];

  return (
    <div className="home6-container">
      <h2 className="home6-title">Лучшие предложения месяца</h2>

      <Link to="catalog" className="home6-button">
        Смотреть все <span className="dot"></span>
      </Link>

      <div className="home6-cards">
        {products.map((product, i) => (
          <div className="home6-card" key={i}>
            <span className="tag">{product.tag}</span>

            <div className="img-box">
              <img src={product.img} alt={product.name} />
            </div>

            <p className="product-text">
              {product.name}, {product.volume}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
