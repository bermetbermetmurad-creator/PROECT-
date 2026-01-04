import React from "react";
import "./home9.css";
import im1 from "../../../assets/чоп.png";
import im2 from "../../../assets/помидор.png";
import { useNavigate } from "react-router-dom";

export default function Home9() {
  const navigate = useNavigate();

  return (
    <div className="news-section">
      <div className="news-header">
        <div className="news-title-block">
          <h4 className="news-subtitle">Новости</h4>
          <h2 className="news-title">
            Новости об органических<br />
            продуктах и многом другом
          </h2>
        </div>

        <button
          className="news-more-btn"
          onClick={() => navigate("/news")}
        >
          Больше новостей <span>➜</span>
        </button>
      </div>

      <div className="news-cards">

        <div className="news-card">
          <img className="news-img" src={im1} alt="" />

          <div className="news-date">
            <span>25</span>
            <small>Авг.</small>
          </div>

          <div className="news-content">
            <h3>Витаминная заправка для летнего салата</h3>
            <p>
              Следите за интересными новостями, чтобы всегда быть в курсе событий.
            </p>

            <button
              className="news-btn"
              onClick={() => navigate("/news/1")}
            >
              Подробнее <span>➜</span>
            </button>
          </div>
        </div>

        <div className="news-card">
          <img className="news-img" src={im2} alt="" />

          <div className="news-date">
            <span>25</span>
            <small>Окт.</small>
          </div>

          <div className="news-content">
            <h3>Каких витаминов не хватает осенью?</h3>
            <p>
              Следите за интересными новостями — они вдохновляют и помогают.
            </p>

            <button
              className="news-btn"
              onClick={() => navigate("/news/2")}
            >
              Подробнее <span>➜</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
