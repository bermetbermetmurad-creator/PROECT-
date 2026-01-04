import React from "react";
import "./aboutcart2.css";
import { useNavigate } from "react-router-dom";
import { FiHeadphones, FiMail, FiClock, FiHelpCircle } from "react-icons/fi";

const AboutCart2 = () => {
  const navigate = useNavigate();

  return (
    <section className="support2">
      {/* HERO */}
      <div className="support2-hero">
        <div className="support2-hero-text">
          <h1>Поддержка</h1>
          <p>
            Мы всегда готовы ответить на все ваши вопросы и помочь в любой
            ситуации. Наша команда поддержки работает для вас каждый день.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980"
          alt="Служба поддержки"
        />
      </div>

      {/* FEATURES */}
      <div className="support2-features">
        <div className="support2-card">
          <FiHeadphones className="support2-icon" />
          <h3>Онлайн поддержка</h3>
          <p>
            Наши специалисты всегда на связи и готовы помочь вам в режиме
            реального времени.
          </p>
        </div>

        <div className="support2-card">
          <FiMail className="support2-icon" />
          <h3>Ответ по почте</h3>
          <p>
            Напишите нам в любое время — мы оперативно ответим на ваш запрос.
          </p>
        </div>

        <div className="support2-card">
          <FiClock className="support2-icon" />
          <h3>Быстрые ответы</h3>
          <p>
            Мы ценим ваше время и стараемся решать вопросы максимально быстро.
          </p>
        </div>

        <div className="support2-card">
          <FiHelpCircle className="support2-icon" />
          <h3>Помощь 24/7</h3>
          <p>
            Независимо от дня и времени — мы рядом и готовы помочь.
          </p>
        </div>
      </div>


      <div className="support2-info">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
          alt="Консультация"
        />
        <div>
          <h2>Мы заботимся о каждом клиенте</h2>
          <p>
            Поддержка — это не просто ответы на вопросы. Это внимание,
            забота и стремление сделать ваш опыт максимально комфортным.
            Мы всегда открыты к диалогу и готовы помочь.
          </p>
        </div>
      </div>


      <div className="support2-back">
        <button onClick={() => navigate(-1)}>← Назад</button>
      </div>
    </section>
  );
};

export default AboutCart2;
