import React, { useState } from "react";
import "./about5.css";
import emailjs from "emailjs-com";

const About5 = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Пожалуйста, введите email!");
      return;
    }


    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",    
        { user_email: email },  
        "YOUR_PUBLIC_KEY"       
      )
      .then(
        (result) => {
          alert("Отправлено!");
          setEmail(""); 
        },
        (error) => {
          alert("Ошибка при отправке, попробуйте ещё раз.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="about5-container">
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
