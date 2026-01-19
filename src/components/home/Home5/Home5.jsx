import React, { useState } from "react";
import "./home5.css";

import person1 from "../../../assets/чел.png";
import person2 from "../../../assets/person2.jpg";
import person3 from "../../../assets/person3.avif";

const reviews = [
  {
    photo: person1,
    rating: 5,
    text: "Наши клиенты остаются довольны результатом и возвращаются к нам снова. Мы ценим доверие каждого и всегда стремимся превзойти ожидания."
  },
  {
    photo: person2,
    rating: 4,
    text: "Очень приятный сервис, качественные продукты и быстрая доставка. Буду заказывать ещё!"
  },
  {
    photo: person3,
    rating: 5,
    text: "Пользуюсь уже второй год. Качество всегда стабильно высокое. Спасибо вашей команде!"
  }
];

export default function Home5() {
  const [active, setActive] = useState(0);

  return (
    <div className="home5">
      <div className="home5-content">

        <p className="subtitle">Отзывы</p>
        <h2 className="title">Что говорят наши покупатели?</h2>

        <div className="review-block">

          <div className="review-photo">
            <img src={reviews[active].photo} alt="client" />
          </div>

          <div className="stars">
            {"★".repeat(reviews[active].rating)}
            {"☆".repeat(5 - reviews[active].rating)}
          </div>

          <p className="review-text">
            {reviews[active].text}
          </p>

          <div className="dots">
            {reviews.map((_, index) => (
              <span
                key={index}
                className={active === index ? "dot active" : "dot"}
                onClick={() => setActive(index)}
              />
            ))}
          </div>

        </div>

        <hr className="line" />

        {/* статистика остаётся как у тебя */}
      </div>
    </div>
  );
}
