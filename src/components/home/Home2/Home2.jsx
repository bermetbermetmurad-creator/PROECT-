import React from "react";
import './home2.css';
import heroImage from '../../../assets/Image.png';
import heroImagi from '../../../assets/Image-2.png';
import { Link } from "react-router-dom";


export default function Home2() {
  return (
    <section className="home2-root">
      <div className="container">
        <Link to="/new" className="card left-card">
          <div className="card-bg" style={{ backgroundImage: `url(${heroImage})` }} aria-hidden="true" />
          <div className="card-content">
            <p className="label">Новинки!</p>
            <h2 className="title">Свежайшее штирийское масло</h2>
          </div>
        </Link>

        <Link to="/discounts" className="card right-card">
          <div className="card-bg" style={{ backgroundImage: `url(${heroImagi})` }} aria-hidden="true" />
          <div className="card-content">
            <p className="promo">Скидка!</p>
            <h2 className="title">Скидка 20%<br/>за подписку</h2>
          </div>
        </Link>
      </div>
    </section>
  );
}