import React from "react";
import "./home10.css";

const Home10 = () => {                                                                                                                                 
  return (
    <div className="home10-container">
      <div className="home10-content">
        <h2 className="home10-title">Узнайте первыми<br />о новых акциях!</h2>

        <div className="home10-form">
          <input
            type="email"
            placeholder="Введите ваш e-mail адрес"
            className="home10-input"
          />
          <button className="home10-button">Подписаться</button>
        </div>
      </div>

      <div className="home10-image"></div>
    </div>
  );
};

export default Home10;