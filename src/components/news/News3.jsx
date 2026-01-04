import React from "react";
import "./news3.css";

const News3 = () => {
  return (
    <div className="news3-container">
      <div className="news3-content">
        <h2 className="news3-title">
          Узнайте первыми<br />о новых акциях!
        </h2>

        <div className="news3-form">
          <input
            type="email"
            placeholder="Введите ваш e-mail адрес"
            className="news3-input"
          />
          <button className="news3-button">Подписаться</button>
        </div>
      </div>

      <div className="news3-image"></div>
    </div>
  );
};

export default News3;
