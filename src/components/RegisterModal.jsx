import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "./RegisterModal.css";

const RegisterModal = ({ isOpen, onClose, onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let value = e.target.value;

    if (e.target.name === "password") {
      value = value.slice(0, 6);
    }

    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error("API error:", error);
    }

    onRegister(formData.name);

    setFormData({ name: "", email: "", password: "" });

    const alertDiv = document.createElement("div");
    alertDiv.textContent = "Успешно";
    alertDiv.style.position = "fixed";
    alertDiv.style.top = "20px";
    alertDiv.style.right = "20px";
    alertDiv.style.background = "#4CAF50";
    alertDiv.style.color = "white";
    alertDiv.style.padding = "15px 20px";
    alertDiv.style.borderRadius = "10px";
    alertDiv.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
    alertDiv.style.zIndex = 10000;
    alertDiv.style.fontWeight = "bold";
    document.body.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.remove();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>Войти</h2>

        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="register-btn">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
