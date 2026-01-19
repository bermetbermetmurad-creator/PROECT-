import React, { useContext, useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/Group.png";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { LanguageContext } from "../LanguageContext/LanguageContext.jsx";
import { useCart } from "../CartContext/CartContext.jsx";
import { useFavorite } from "../FavoriteContext.jsx";

import RegisterModal from "../RegisterModal.jsx";
import ProfileModal from "../ProfileModal.jsx";

const Header = () => {
  const { language } = useContext(LanguageContext);
  const { cartItems, setIsCartOpen } = useCart();
  const { favorites, setIsFavoriteOpen } = useFavorite();

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 🔍 поиск
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("userName");
    if (storedUser) setUserName(storedUser);
  }, []);

  useEffect(() => {
    fetch("https://691a97112d8d7855756f513a.mockapi.io/myApi")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = () => {
    const query = searchText.trim().toLowerCase();
    if (!query) return;

    const found = products.find(p => p.name.toLowerCase() === query);

    if (found) {
      navigate(`/catalog/${found.id}`);
      setSearchText("");
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2500);
    }
  };

  const cartCount = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  const t = {
    ru: { about: "О нас", catalog: "КАТАЛОГ", catalogHome: "Главная", catalogProducts: "Товары", news: "Новости", searchPlaceholder: "Поиск..." },
    en: { about: "About", catalog: "CATALOG", catalogHome: "Home", catalogProducts: "Products", news: "News", searchPlaceholder: "Search..." },
  };

  const handleRegister = (name) => {
    setUserName(name);
    localStorage.setItem("userName", name);
    setIsRegisterOpen(false);
  };

  const handleLogout = () => {
    setUserName("");
    localStorage.removeItem("userName");
    setIsProfileOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <Link to="/" className="logo-text">Belaléa</Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t[language].about}</Link>
          <div className="dropdown">
            <span className="dropbtn">{t[language].catalog}</span>
            <div className="dropdown-content">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>{t[language].catalogHome}</Link>
              <Link to="/catalog" onClick={() => setIsMobileMenuOpen(false)}>{t[language].catalogProducts}</Link>
            </div>
          </div>
          <Link to="/news" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t[language].news}</Link>
        </nav>

        <div className="search-contact">
          <input
            type="text"
            placeholder={t[language].searchPlaceholder}
            className="search-bar"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          <button className="search-btn" onClick={handleSearch}>
            <IoIosSearch />
          </button>

          <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
            <FaShoppingCart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>

          <button className="favorite-btn" onClick={() => setIsFavoriteOpen(true)}>
            <FaHeart />
            {favorites.length > 0 && <span className="favorite-count">{favorites.length}</span>}
          </button>

          {!userName ? (
            <button className="login-btn" onClick={() => setIsRegisterOpen(true)}>Войти</button>
          ) : (
            <button className="login-btn" onClick={() => setIsProfileOpen(true)}>Профиль</button>
          )}
        </div>
      </header>

      {showAlert && (
        <div className="custom-alert">
          ❌ Продукт не найден
        </div>
      )}

      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} onRegister={handleRegister} />
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} userName={userName} onLogout={handleLogout} />
    </>
  );
};

export default Header;
