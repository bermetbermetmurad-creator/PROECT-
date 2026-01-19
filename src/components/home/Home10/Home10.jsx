import React, { useState } from "react";
import "./home10.css";

const Home10 = () => {
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
    <div className="home10-container">
      {showAlert && (
        <div className="home10-alert">
          <span>✅ ПОДПИСАНО</span>
        </div>
      )}

      <div className="home10-content">
        <h2 className="home10-title">
          Узнайте первыми<br />о новых акциях!
        </h2>

        <div className="home10-form">
          <input
            type="email"
            placeholder="Введите ваш e-mail адрес"
            className="home10-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="home10-button" onClick={handleSubscribe}>
            Подписаться
          </button>
        </div>
      </div>

      <div className="home10-image"></div>
    </div>
  );
};

export default Home10;
