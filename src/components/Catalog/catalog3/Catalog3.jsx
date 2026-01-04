import React from "react";
import "./catalog3.css";

const Catalog3 = () => {
  return (
    <div className="catalog3-container">
      <div className="catalog3-content">
        <h2 className="catalog3-title">
          Узнайте первыми<br />о новых акциях!
        </h2>

        <div className="catalog3-form">
          <input
            type="email"
            placeholder="Введите ваш e-mail адрес"
            className="catalog3-input"
          />
          <button className="catalog3-button">Подписаться</button>
        </div>
      </div>

      <div className="catalog3-image"></div>
    </div>
  );
};

export default Catalog3;
