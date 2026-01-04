import React from "react";
import "./offersPage.css";
import offer1 from '../../assets/oo4.webp';
import offer2 from '../../assets/oo1.webp';
import offer3 from '../../assets/oo2.webp';
import offer4 from '../../assets/oo3.webp';

const OffersPage = () => {
  const offers = [
    { id: 1, img: offer1, title: "Супер Скидка на Масло", desc: "Свежие продукты каждый день с максимальной выгодой!" },
    { id: 2, img: offer2, title: "Оливковое масло со скидкой", desc: "Натуральные и полезные продукты для всей семьи." },
    { id: 3, img: offer3, title: "Органические", desc: "Только свежие и экологически чистые" },
    { id: 4, img: offer4, title: "Масло по акции", desc: "С лучшими предложениями месяца." }
  ];

  return (
    <div className="offers-page">
      <h1 className="offers-title">Лучшие предложения месяца</h1>
      <p className="offers-intro">
        Мы собрали для вас самые выгодные предложения этого месяца! Не упустите шанс приобрести качественные и свежие продукты по специальным ценам.
      </p>

      <div className="offers-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.img} alt={offer.title} className="offer-img" />
            <h3 className="offer-title">{offer.title}</h3>
            <p className="offer-desc">{offer.desc}</p>
          </div>
        ))}
      </div>

      <div className="offers-footer">
        <button className="back-btn" onClick={() => window.history.back()}>← Назад</button>
      </div>
    </div>
  );
};

export default OffersPage;
