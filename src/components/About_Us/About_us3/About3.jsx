import React from 'react';
import './about3.css';
import { FiShoppingCart, FiCheckCircle, FiHeadphones } from 'react-icons/fi';
import about3 from '../../../assets/Photo.jpg'
import { useNavigate } from "react-router-dom";

const About3 = () => {
    const navigate = useNavigate();
    return (
        <section className="about3-section">
            <div className="about3-container">
                <div className="about3-content">
                    <h4 className="about3-subtitle">Почему мы?</h4>
                    <h2 className="about3-title">
                        Мы закупаем семена<br />и орехи у лучших фермеров.
                    </h2>
                    <p className="about3-text">
                        Мы выбираем только лучшее! Закупаем семена и орехи напрямую у проверенных фермеров, чтобы вы получали свежий, качественный продукт каждый день.
                    </p>

                    <ul className="about3-benefits">
                        <li className="about3-benefit-item">
                            <span className="about3-benefit-icon"></span>
                            <div className="about3-benefit-text-group">
                                <h5 className="about3-benefit-title">100% Натуральные продукты</h5>
                                <p className="about3-benefit-description">
                                    100% натуральные продукты, выращенные с любовью и заботой лучшими фермерами. Вкус, которому можно доверять.
                                </p>
                            </div>
                        </li>
                        <li className="about3-benefit-item">
                            <span className="about3-benefit-icon"></span>
                            <div className="about3-benefit-text-group">
                                <h5 className="about3-benefit-title">Сертификаты качества и соответствия</h5>
                                <p className="about3-benefit-description">
                                    Мы гарантируем надежность и высокое качество: каждая партия семян и орехов сопровождается сертификатами соответствия и качества.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="about3-image-wrapper">

                    <img src={about3} alt="Разнообразие свежих продуктов: лимоны, зелень, огурцы" className="about3-image" />
                </div>
            </div>

            <div className="about3-features">
                <div
                    className="about3-feature-card"
                    onClick={() => navigate("/aboutcart")}
                    style={{ cursor: "pointer" }}
                >
                    <div className="about3-feature-icon-box">
                        <FiShoppingCart className="about3-feature-icon" />
                    </div>

                    <h5 className="about3-feature-title">Доступность</h5>

                    <p className="about3-feature-description">
                        Наша продукция во всех гипермаркетах
                    </p>
                </div>
                <div
                    className="about3-feature-card"
                    onClick={() => navigate("/aboutcart1")}
                    style={{ cursor: "pointer" }}
                >
                    <div className="about3-feature-icon-box">
                        <FiCheckCircle className="about3-feature-icon" />
                    </div>

                    <h5 className="about3-feature-title">100% Свежесть</h5>

                    <p className="about3-feature-description">
                        Мы — местный производитель
                    </p>
                </div>
                <div
                    className="about3-feature-card"
                    onClick={() => navigate("/aboutcart2")}
                    style={{ cursor: "pointer" }}
                >
                    <div className="about3-feature-icon-box">
                        {/* Иконка Поддержки */}
                        <FiHeadphones className="about3-feature-icon" />
                    </div>

                    <h5 className="about3-feature-title">Поддержка</h5>
                    <p className="about3-feature-description">
                        Мы всегда готовы ответить на все вопросы
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About3;