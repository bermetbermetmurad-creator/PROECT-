import React, { useState } from "react";
import "./catalog3.css";

const Catalog3 = () => {
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
    <div className="catalog3-container">
      {showAlert && (
        <div className="catalog3-alert">
          <span>✅ ПОДПИСАНО</span>
        </div>
      )}

      <div className="catalog3-content">
        <h2 className="catalog3-title">
          Узнайте первыми<br />о новых акциях!
        </h2>

        <div className="catalog3-form">
          <input
            type="email"
            placeholder="Введите ваш e-mail адрес"
            className="catalog3-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="catalog3-button" onClick={handleSubscribe}>
            Подписаться
          </button>
        </div>
      </div>

      <div className="catalog3-image"></div>
    </div>
  );
};

export default Catalog3;
