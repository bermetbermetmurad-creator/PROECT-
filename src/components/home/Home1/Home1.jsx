import React from "react";
import './home1.css';
import fon from '../../../assets/Background.png';
import { Link } from 'react-router-dom';

export default function Home1() {
  return (
    <section className="home1-root" style={{ backgroundImage: `url(${fon})` }}>
      <div className="home1-container">
        <p className="home1-subtitle">100% натурально</p>
        <h1 className="home1-title">Масла и мука<br/>из фермерского<br/>сырья</h1>
        <Link to="catalog" className="home1-btn">В КАТАЛОГ</Link>
      </div>
    </section>
  );
}
