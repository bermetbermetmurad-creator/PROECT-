import React, { useState } from "react";
import defaultAvatar from "../assets/awatar.jpg";
import "./RegisterModal.css";

const RegisterModal = ({ isOpen, onClose, onRegister, onLogin }) => {
  const [activeTab, setActiveTab] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "login") {
      setLoginData({ ...loginData, [name]: value });
    } else {
      setRegisterData({ ...registerData, [name]: value });
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (onLogin) onLogin(loginData);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (onRegister) onRegister({
      name: `${registerData.firstName} ${registerData.lastName}`,
      email: registerData.email,
      password: registerData.password, 
      avatar: defaultAvatar,
      bio: "Frontend developer",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="tabs">
          <button
            type="button"
            className={activeTab === "login" ? "active" : ""}
            onClick={() => setActiveTab("login")}
          >
            Войти
          </button>
          <button
            type="button"
            className={activeTab === "register" ? "active" : ""}
            onClick={() => setActiveTab("register")}
          >
            Регистрация
          </button>
        </div>

        {activeTab === "login" ? (
          <form onSubmit={handleLoginSubmit} className="register-form">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) => handleChange(e, "login")}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Пароль"
              value={loginData.password}
              onChange={(e) => handleChange(e, "login")}
              required
            />
            <button type="submit" className="register-btn">Войти</button>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit} className="register-form">
            <input
              name="firstName"
              placeholder="Имя"
              value={registerData.firstName}
              onChange={(e) => handleChange(e, "register")}
              required
            />
            <input
              name="lastName"
              placeholder="Фамилия"
              value={registerData.lastName}
              onChange={(e) => handleChange(e, "register")}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={registerData.email}
              onChange={(e) => handleChange(e, "register")}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Пароль"
              value={registerData.password}
              onChange={(e) => handleChange(e, "register")}
              required
            />
            <button type="submit" className="register-btn">Зарегистрироваться</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;
