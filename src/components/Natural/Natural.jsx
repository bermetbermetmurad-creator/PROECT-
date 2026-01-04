import React from "react";
import { useNavigate } from "react-router-dom";
import "./natural.css";


const Natural = () => {
const navigate = useNavigate();


return (
<div className="natural-container">
<div className="natural-content">
<h1 className="natural-title">Натуральное оливковое масло</h1>
<p className="natural-text">
Натуральное оливковое масло холодного отжима — это 100% чистый продукт,
изготовленный из отборных оливок без добавок и консервантов.
Оно идеально подходит для салатов, горячих блюд и здорового питания.
</p>


<ul className="natural-list">
<li>✔ 100% натуральный состав</li>
<li>✔ Холодный отжим</li>
<li>✔ Богато витаминами и антиоксидантами</li>
<li>✔ Подходит для ежедневного использования</li>
</ul>


<button className="back-btn" onClick={() => navigate(-1)}>
Назад
</button>
</div>
</div>
);
};


export default Natural;