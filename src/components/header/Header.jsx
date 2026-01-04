import React, { useContext } from "react";
import "./Header.css";
import logo from "../../assets/Group.png";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

import { LanguageContext } from "../LanguageContext/LanguageContext.jsx";
import { useCart } from "../CartContext/CartContext.jsx";
import { useFavorite } from "../FavoriteContext.jsx";

const Header = () => {
  const { language } = useContext(LanguageContext);
  const { cartItems, setIsCartOpen } = useCart();
  const { favorites, setIsFavoriteOpen } = useFavorite();

  // ✅ ОБЩЕЕ КОЛИЧЕСТВО ТОВАРОВ В КОРЗИНЕ
  const cartCount = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  const t = {
    ru: {
      about: "О нас",
      catalog: "КАТАЛОГ",
      catalogHome: "Главная",
      catalogProducts: "Товары",
      news: "Новости",
      searchPlaceholder: "Поиск..."
    },
    en: {
      about: "About",
      catalog: "CATALOG",
      catalogHome: "Home",
      catalogProducts: "Products",
      news: "News",
      searchPlaceholder: "Search..."
    }
  };

  return (
    <header className="header">
      {/* LOGO */}
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <Link to="/" className="logo-text">Belaléa</Link>
      </div>

      {/* NAV */}
      <nav className="nav-links">
        <Link to="/about" className="nav-link">
          {t[language].about}
        </Link>

        <div className="dropdown">
          <span className="dropbtn">{t[language].catalog}</span>
          <div className="dropdown-content">
            <Link to="/">{t[language].catalogHome}</Link>
            <Link to="/catalog">{t[language].catalogProducts}</Link>
          </div>
        </div>

        <Link to="/news" className="nav-link">
          {t[language].news}
        </Link>
      </nav>

      {/* SEARCH + ICONS */}
      <div className="search-contact">
        <input
          type="text"
          placeholder={t[language].searchPlaceholder}
          className="search-bar"
        />
        <button className="search-btn">
          <IoIosSearch />
        </button>

        <button
          className="cart-btn"
          onClick={() => setIsCartOpen(true)}
        >
          <FaShoppingCart />
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </button>

 
        <button
          className="favorite-btn"
          onClick={() => setIsFavoriteOpen(true)}
        >
          <FaHeart />
          {favorites.length > 0 && (
            <span className="favorite-count">
              {favorites.length}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
