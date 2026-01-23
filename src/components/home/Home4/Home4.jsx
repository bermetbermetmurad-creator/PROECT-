import React, { useEffect, useState } from "react";
import "./Home4.css";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useCart } from "../../CartContext/CartContext";
import { useFavorite } from "../../FavoriteContext";
import { useUser } from "../../UserContext/UserContext";


const getPriceById = (id) => {
  const prices = {
    "1": 1200,
    "2": 950,
    "3": 1800,
    "4": 700,
    "5": 1500,
    "6": 2200,
    "7": 1300,
    "8": 890,
  };

  return prices[id] || 999;
};

export default function Home4() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const { favorites } = useFavorite();
  const { user } = useUser();
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

  const handleAddToCart = (item) => {
    if (!user) {
      toast.info("Сначала войдите или зарегистрируйтесь");
      window.dispatchEvent(new Event("open-register-modal"));
      return;
    }

    const price = getPriceById(item.id);

    addToCart({
      ...item,
      price,
      quantity: 1,
    });

    toast.success(`${item.name} добавлен в корзину`);
  };

  return (
    <div className="products-wrapper">
      <ToastContainer position="top-right" autoClose={2000} />

      <p className="subtitle">Продукты</p>
      <h1 className="title">Наши продукты</h1>

      <div className="products-grid">
        {items.map((item) => (
          <div key={item.id} className="product-card">
            <span className="badge">{item.job || "Категория"}</span>

            <div className="product-img-wrapper">
              <img
                className="product-img"
                src={item.avatar}
                alt={item.name}
              />

              <div className="product-actions">
                {/* 🛒 КОРЗИНА */}
                <button
                  className="action-btn"
                  onClick={() => handleAddToCart(item)}
                  title="Добавить в корзину"
                >
                  <FaShoppingCart />
                </button>


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


            <p className="product-price">
              {getPriceById(item.id).toLocaleString()} ₽
            </p>
          </div>
        ))}
      </div>

      <Link to="/catalog" className="primary-btn green">
        Смотреть все товары
      </Link>
    </div>
  );
}
