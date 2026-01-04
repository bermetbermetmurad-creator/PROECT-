import { useNavigate } from "react-router-dom";
import "./news2.css";

import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.png";
import news4 from "../../assets/news4.png";
import news5 from "../../assets/news5.png";
import news6 from "../../assets/news6.png";
import news7 from "../../assets/news7.png";

const newsData = [
  {
    id: 1,
    title: "Польза витамина D и как его получить",
    text: "Витамин D укрепляет иммунитет, кости и зубы, помогает организму усваивать кальций и поддерживает хорошее настроение. Получить его можно от солнечного света, а также из рыбы, яиц и молочных продуктов.",
    img: news2,
  },
  {
    id: 2,
    title: "Польза витамина C и как его получить",
    text: "Витамин C укрепляет иммунитет, помогает бороться с вирусами и ускоряет восстановление организма. Он содержится в цитрусовых, киви, ягодах, болгарском перце и зелени.",
    img: news3,
  },
  {
    id: 3,
    title: "Изучайте больше органических продуктов",
    text: "Выбирайте органические продукты — меньше химии, больше пользы для здоровья и природы.",
    img: news4,
  },
  {
    id: 4,
    title: "Свежие фрукты каждый день",
    text: "Свежие фрукты каждый день — энергия, витамины и хорошее настроение.",
    img: news5,
  },
  {
    id: 5,
    title: "Не используйте пластик! Он убивает природу",
    text: "Не используйте пластик — сохраняйте природу для будущих поколений.",
    img: news6,
  },
  {
    id: 6,
    title: "Экологичный образ жизни",
    text: "Экологичный образ жизни помогает сохранить природу и здоровье.",
    img: news7,
  },
];

const News2 = () => {
  const navigate = useNavigate();

  return (
    <section className="news2">
      <div className="news2-grid">
        {newsData.map((item) => (
          <div className="news2-card" key={item.id}>
            <div
              className="news2-image"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="news2-date">
                <span>25</span>
                <small>Ноя</small>
              </div>
            </div>

            <div className="news2-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <button
                className="news2-btn"
                onClick={() => navigate(`/news/${item.id}`)}
              >
                Читать далее <span>●</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News2;
