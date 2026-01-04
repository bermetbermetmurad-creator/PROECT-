import React from "react";
import "./home7.css";
import farmImg from "../../../assets/farm.png"; 
export default function Home7() {
  return (
    <section className="home7-root">
      <img src={farmImg} alt="eco" className="home7-img" />

      <div className="home7-content">
        <p className="home7-sub">Eco Friendly</p>
        <h2 className="home7-title">Создаём здоровое будущее</h2>

        <div className="home7-item">
          <h3>Современное сельское хозяйство</h3>
          <p>
            Sed et perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>

        <div className="home7-item">
          <h3>Технологичный подход в производстве</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
        </div>

        <div className="home7-item">
          <h3>Популяризация натуральных продуктов</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
        </div>
      </div>
    </section>
  );
}
