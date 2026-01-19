import React from "react";
import { useNavigate } from "react-router-dom";
import "./aboutcart.css";

const AboutCart = () => {
  const navigate = useNavigate();

  return (
    <div className="aboutcart-container">
      <div className="aboutcart-header">
        <h1>Доступность нашей продукции</h1>
        <p>
          Наша продукция — оливковое и растительное масло — представлена
          во всех крупных гипермаркетах. Мы обеспечиваем стабильное качество,
          доступные цены и широкий выбор для каждого покупателя.
        </p>
      </div>

      <div className="aboutcart-content">
        <div className="aboutcart-item">
          <img
            src="https://images.unsplash.com/photo-1604909052743-94e838986d24"
            alt="Оливковое масло"
          />
          <h3>Оливковое масло</h3>
          <p>
            Натуральное оливковое масло первого холодного отжима.
            Идеально подходит для салатов, жарки и здорового питания.
          </p>
        </div>

        <div className="aboutcart-item">
          <img
            src="https://www.65ymas.com/uploads/s1/30/93/07/estos-son-los-mejores-y-peores-aceites-de-oliva-del-supermercado_1_621x621.jpeg"
            alt="Растительное масло"
          />
          <h3>Растительное масло</h3>
          <p>
            Качественное растительное масло для ежедневного использования.
            Отличный выбор для приготовления блюд и выпечки.
          </p>
        </div>


        <div className="aboutcart-item">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e"
            alt="Масло в магазине"
          />
          <h3>Всегда в наличии</h3>
          <p>
            Наши масла вы легко найдете на полках гипермаркетов и
            супермаркетов по всей стране.
          </p>
        </div>
      </div>

      <div className="aboutcart-footer">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Назад
        </button>
      </div>
    </div>
  );
};

export default AboutCart;
