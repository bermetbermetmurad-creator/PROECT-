import React from "react";
import "./about2.css";
import about2 from '../../../assets/about2.png'
import about22 from '../../../assets/icon.svg'
import about222 from '../../../assets/Chemical Plant.png'
import { useNavigate } from "react-router-dom";



const About2 = () => {
  const navigate = useNavigate();
  return (
    <div className="about2">
      <div className="about2-left">
        <img className="about2-main-img" src={about2} />
      </div>

      <div className="about2-right">
        <p className="about2-mini-title">О нас</p>

        <h2 className="about2-title">
          Натуральные продукты – <br /> здоровое население
        </h2>

        <p className="about2-text">
          Belalea — это бренд натуральных и повседневных продуктов питания, ориентированный на качество, простоту и заботу о здоровье.

          Belalea специализируется на производстве и продаже оливкового масла, растительного масла и муки, сочетая традиционные методы переработки с современными стандартами качества. Продукция бренда подходит как для ежедневного домашнего использования, так и для профессиональной кухни.
        </p>

        <p className="about2-text">
          Оливковое масло Belalea отличается мягким вкусом и подходит для салатов, жарки и приготовления горячих блюд. Растительное масло универсально и удобно для ежедневной готовки. Мука Belalea производится из качественного зерна и подходит для выпечки, хлеба и домашних блюд.
        </p>

        <div className="about2-items">

          <div className="about2-item">
            <img className="about2-icon-img" src={about22} />
            <p>Современная сельхоз. техника</p>
          </div>

          <div className="about2-item">
            <img className="about2-icon-img" src={about222} />
            <p>Выращивание без гормонов</p>
          </div>

        </div>

        <button className="about2-btn" onClick={() => navigate ("/contact")}>
          Контакты →
        </button>
      </div>
    </div>
  );
};

export default About2;
