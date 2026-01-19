import React, { useState } from "react";
import { useCart } from "./CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const ORDER_API = "https://691a97112d8d7855756f513a.mockapi.io/orders";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("visa");
  const [delivery, setDelivery] = useState("courier");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const validateForm = () => {
    const phoneRegex = /^\+996\d{9}$/; // Кыргызстанский номер
    if (!phoneRegex.test(phone)) {
      setError("Введите корректный номер телефона (+996 ХХХ ХХХ ХХХ)");
      return false;
    }
    if (address.length < 5) {
      setError("Введите корректный адрес");
      return false;
    }
    if (cartItems.length === 0) {
      setError("Корзина пуста");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await fetch(ORDER_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          address,
          payment,
          delivery,
          items: cartItems,
          totalPrice,
          createdAt: new Date().toISOString(),
        }),
      });

      clearCart();
      setSuccess("✅ Заказ успешно оформлен!");
      setTimeout(() => {
        setSuccess("");
        navigate("/");
      }, 2000);
    } catch (err) {
      console.error(err);
      setError("Произошла ошибка при оформлении заказа");
    }
  };

  return (
    <div className="checkout">
      <h2>Оформление заказа</h2>

      {error && <div className="alert alert-error">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <div className="checkout-items">
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <img src={item.avatar} alt={item.name} />
            <div className="item-info">
              <p>{item.name}</p>
              <p>{item.quantity} шт.</p>
              <p>{(item.price * item.quantity).toLocaleString()} ₽</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="checkout-form">
        <label>
          Номер телефона
          <input
            type="tel"
            placeholder="+996 ХХХ ХХХ ХХХ"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>

        <label>
          Адрес доставки
          <input
            type="text"
            placeholder="Улица, дом, квартира"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>

        <label>
          Способ доставки
          <select
            value={delivery}
            onChange={(e) => setDelivery(e.target.value)}
          >
            <option value="courier">Курьером</option>
            <option value="pickup">Самовывоз</option>
          </select>
        </label>

        <label>
          Способ оплаты
          <select value={payment} onChange={(e) => setPayment(e.target.value)}>
            <option value="visa">Visa</option>
            <option value="mastercard">MasterCard</option>
            <option value="cash">Наличные</option>
          </select>
        </label>

        <div className="checkout-summary">
          <span>Товары: {cartItems.length} шт.</span>
          <span>Итог: {totalPrice.toLocaleString()} ₽</span>
        </div>

        <button type="submit" className="checkout-btn">
          Подтвердить заказ
        </button>
      </form>
    </div>
  );
}
