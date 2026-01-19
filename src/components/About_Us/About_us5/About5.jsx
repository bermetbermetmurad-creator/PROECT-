import React, { useState } from "react";
import "./about5.css";

const About5 = () => {
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
    <div className="about5-container">

      {showAlert && (
        <div className="custom-alert">
          <span>✅ ПОДПИСАНО</span>
        </div>
      )}

      <div className="about5-content">
        <h2 className="about5-title">
          Узнайте первыми<br />о новых акциях!
        </h2>

        <div className="about5-form">
          <input
            type="email"
            placeholder="Введите ваш e-mail адрес"
            className="about5-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="about5-button" onClick={handleSubscribe}>
            Подписаться
          </button>
        </div>
      </div>

      <div className="about5-image"></div>
    </div>
  );
};

export default About5;
