import React, { useState } from "react";
import "./news3.css";

const News3 = () => {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubscribe = () => {
    if (!email) return;

    setShowAlert(true);
    setEmail("");

    setTimeout(() => {
      setShowAlert(false);
    }, 2500);
  };

  return (
    <div className="news3-container">
      {showAlert && (
        <div className="news3-alert">
          <span>✅ ПОДПИСАНО</span>
        </div>
      )}

      <div className="news3-content">
        <h2 className="news3-title">
          Узнайте первыми<br />о новых акциях!
        </h2>

        <div className="news3-form">
          <input
            type="email"
            placeholder="Введите ваш e-mail адрес"
            className="news3-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="news3-button" onClick={handleSubscribe}>
            Подписаться
          </button>
        </div>
      </div>

      <div className="news3-image"></div>
    </div>
  );
};

export default News3;
