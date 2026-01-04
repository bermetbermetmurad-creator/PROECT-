import React from "react";
import './home3.css';
import fon1 from '../../../assets/fon2.png';
import icons1 from '../../../assets/icons1.svg'
import icons2 from '../../../assets/icons2.svg'
import { Link } from "react-router-dom";


export default function Home3() {
  return (
    <section className="home3-root">
      <img src={fon1} alt="about" className="home3-bg" />

      <div className="home3-content">
        <p className="home3-sub">О нас</p>
        <h2 className="home3-title">Мы работаем только с качественным сырьём от местных фермеров</h2>

        <p className="home3-text">
          Работа с местными фермерами приносит производственным компаниям преимущество в виде
          высококачественного сырья, укрепляет местное сообщество, снижает экологический след и способствует
          устойчивости цепочки поставок, обеспечивая надёжность и прозрачность.
        </p>

        <div className="home3-box">
          <div className="home3-icon"><img src={icons1}/></div>
          <div>
            <h3>Только натуральная продукция</h3>
            <p>Полагаясь на природу, мы предлагаем продукты без искусственных добавок, гарантируя вам чистоту и качество.</p>
          </div>
        </div>

        <div className="home3-box">
          <div className="home3-icon2"><img src={icons2}/></div>
          <div>
            <h3>Высокие стандарты качества</h3>
            <p>На каждом этапе производства мы стремимся к совершенству, чтобы вы могли наслаждаться продуктами с превосходным качеством и вкусом.</p>
          </div>
        </div>

        <Link to="about" className="home3-btn">Подробнее</Link>
      </div>
    </section>
  );
}