import React from "react";
import "./aboutcart1.css";
import { useNavigate } from "react-router-dom";

const AboutCart1 = () => {
  const navigate = useNavigate();

  return (
    <div className="freshness-page">

      <div className="freshness-hero">
        <div className="freshness-overlay">
          <h1>100% Свежесть</h1>
          <p>
            Мы заботимся о качестве каждого продукта, чтобы вы получали только
            свежее, натуральное и полезное.
          </p>
        </div>
      </div>


      <div className="freshness-content">
        <div className="freshness-card">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.aXuI7D3Ozxazt5GCLbrMnwHaFj?w=800&h=600&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Свежие овощи"
          />
          <h3>Натуральные продукты</h3>
          <p>
            Мы сотрудничаем только с проверенными фермерами и поставщиками.
            Никаких консервантов и искусственных добавок.
          </p>
        </div>

        <div className="freshness-card">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.SRIA6EAK_i4gIAXN4Iou7AHaFv?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Свежие фрукты"
          />
          <h3>Ежедневные поставки</h3>
          <p>
            Продукты поступают каждый день, что гарантирует максимальную
            свежесть и насыщенный вкус.
          </p>
        </div>

        <div className="freshness-card">
          <img
            src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38"
            alt="Качество"
          />
          <h3>Контроль качества</h3>
          <p>
            Каждый товар проходит строгую проверку перед тем, как попасть на
            полки магазина.
          </p>
        </div>
      </div>


      <div className="back-btn-wrapper">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Назад
        </button>
      </div>
    </div>
  );
};

export default AboutCart1;
