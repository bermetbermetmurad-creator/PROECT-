import React, { useEffect, useState } from "react";
import "./home4.css";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useCart } from "../../CartContext/CartContext";
import { useFavorite } from "../../FavoriteContext";

export default function Home4() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart(); // корзина
  const { toggleFavorite, favorites } = useFavorite(); // избранное
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://691a97112d8d7855756f513a.mockapi.io/myApi")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading">Загрузка...</p>;
  }

  return (
    <div className="products-wrapper">
      {/* ToastContainer для уведомлений */}
      <ToastContainer position="top-right" autoClose={2000} />

      <p className="subtitle">Продукты</p>
      <h1 className="title">Наши продукты</h1>

      <div className="products-grid">
        {items.map((item) => {
          const isFavorite = favorites.some((fav) => fav.id === item.id);

          return (
            <div key={item.id} className="product-card">
              <span className="badge">{item.job || "Категория"}</span>

              <div className="product-img-wrapper">
                <img className="product-img" src={item.avatar} alt={item.name} />

                {/* Иконки */}
                <div className="product-actions">
                  {/* 🛒 КОРЗИНА */}
                  <button
                    className="action-btn"
                    onClick={() => {
                      addToCart(item); // Добавляем товар в корзину
                      toast.success(`${item.name} добавлен в корзину!`); // уведомление
                    }}
                    title="Добавить в корзину"
                  >
                    <FaShoppingCart />
                  </button>

                  <button
                    className={`action-btn ${favorites.some(fav => fav.id === item.id) ? "active" : ""}`}
                    onClick={() => toggleFavorite(item)}
                    title="В избранное"
                  >
                    <FaHeart />
                  </button>



                  {/* 🔍 ПОДРОБНЕЕ */}
                  <button
                    className="action-btn"
                    onClick={() => navigate(`/product/${item.id}`)}
                    title="Подробнее"
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>

              <p className="product-title">{item.name}</p>
            </div>
          );
        })}
      </div>

      <Link to="/catalog" className="primary-btn green">
        Смотреть все товары
      </Link>
    </div>
  );
}
