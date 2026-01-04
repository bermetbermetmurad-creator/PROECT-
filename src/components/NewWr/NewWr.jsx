import React from "react";
import { useNavigate } from "react-router-dom";
import "./newwr.css";
import oo1 from '../../assets/oo1.webp'
import oo2 from '../../assets/oo2.webp'
import oo3 from '../../assets/oo3.webp'
import oo4 from '../../assets/oo4.webp'





const NewWr = () => {
const navigate = useNavigate();


return (
<div className="NewWr-container">
<div className="NewWr-hero">
<img className="NewWr-hero-img" src={oo1} alt="" />
<div className="NewWr-hero-overlay">
<h1 className="NewWr-title">Новинки</h1>
<p className="NewWr-subtitle">
Самые свежие продукты, новые поступления и актуальные предложения
</p>
</div>
</div>


<div className="NewWr-content">
<p className="NewWr-text">
В разделе «Новинки» собраны самые последние поступления нашего магазина.
Мы тщательно отбираем продукты, чтобы вы могли первыми попробовать
новые вкусы и оценить высокое качество натуральных ингредиентов.
</p>


<p className="NewWr-text">
Здесь вы найдёте продукты для здорового питания, свежие масла,
полезные добавки и уникальные товары, которые только появились
в нашем ассортименте.
</p>


<div className="NewWr-gallery">
<div className="NewWr-card">
{/* IMG: product 1 */}
<img className="NewWr-card-img" src={oo2} alt="" />
<p className="NewWr-card-text">Новый продукт</p>
</div>


<div className="NewWr-card">
{/* IMG: product 2 */}
<img className="NewWr-card-img" src={oo3} alt="" />
<p className="NewWr-card-text">Свежая новинка</p>
</div>


<div className="NewWr-card">
{/* IMG: product 3 */}
<img className="NewWr-card-img" src={oo4} alt="" />
<p className="NewWr-card-text">Новое поступление</p>
</div>
</div>


<button className="NewWr-back" onClick={() => navigate(-1)}>
Назад
</button>
</div>
</div>
);
};


export default NewWr;