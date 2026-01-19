import React from "react";
import { useNavigate } from "react-router-dom";
import "./natural.css";
import olive from "../../assets/olive.webp"; 

const Natural = () => {
  const navigate = useNavigate();

  return (
    <div className="natural-container">
      <div className="natural-card">
        <div className="natural-image">
          <img src={olive} alt="Натуральное оливковое масло" />
        </div>

        <div className="natural-content">
          <h1 className="natural-title">Натуральное оливковое масло</h1>

          <p className="natural-text">
            Натуральное оливковое масло холодного отжима — это результат бережного
            производства из отборных плодов средиземноморских оливковых рощ.
            Наше масло сохраняет природный вкус, аромат и все полезные свойства,
            так как не подвергается химической обработке и высоким температурам.
          </p>

          <p className="natural-text">
            Благодаря высокому содержанию антиоксидантов, витаминов E и K,
            а также полезных жирных кислот, оливковое масло поддерживает здоровье
            сердца, улучшает пищеварение и укрепляет иммунную систему.
            Это идеальный продукт для повседневного рациона и изысканных блюд.
          </p>

          <ul className="natural-list">
            <li>100% натуральный состав без примесей</li>
            <li>Холодный отжим — максимум пользы</li>
            <li>Богато антиоксидантами и витаминами</li>
            <li>Подходит для салатов, жарки и соусов</li>
            <li>Традиционное производство и контроль качества</li>
          </ul>

          <button className="back-btn" onClick={() => navigate(-1)}>
            Назад
          </button>
        </div>
      </div>
    </div>
  );
};

export default Natural;
