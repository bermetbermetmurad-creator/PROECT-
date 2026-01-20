import React, { useState } from "react";
import { useCart } from "./CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const ORDER_API = "https://691a97112d8d7855756f513a.mockapi.io/orders";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  // фиксированный язык
  const language = "ru";

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

  const t = {
    ru: {
      title: "Оформление заказа",
      error: "Произошла ошибка при оформлении заказа",
      success: "Заказ успешно оформлен! Переходим в лист ожидания...",
      phoneLabel: "Номер телефона",
      phonePlaceholder: "+996 ХХХ ХХХ ХХХ",
      addressLabel: "Адрес доставки",
      addressPlaceholder: "Улица, дом, квартира",
      deliveryLabel: "Способ доставки",
      paymentLabel: "Способ оплаты",
      items: "Товары",
      total: "Итог",
      confirm: "Подтвердить заказ",
      courier: "Курьером",
      pickup: "Самовывоз",
      visa: "Visa",
      mastercard: "MasterCard",
      cash: "Наличные",
      phoneError: "Введите корректный номер телефона (+996 ХХХ ХХХ ХХХ)",
      addressError: "Введите корректный адрес",
      emptyCart: "Корзина пуста",
    },
  };

  const validateForm = () => {
    const phoneRegex = /^\+996\d{9}$/;

    if (!phoneRegex.test(phone)) {
      setError(t[language].phoneError);
      return false;
    }

    if (address.length < 5) {
      setError(t[language].addressError);
      return false;
    }

    if (cartItems.length === 0) {
      setError(t[language].emptyCart);
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const orderId = `order_${Date.now()}_${Math.random()
        .toString(36)
        .slice(2)}`;

      await fetch(ORDER_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: orderId,
          phone,
          address,
          payment,
          delivery,
          items: cartItems,
          totalPrice,
          createdAt: new Date().toISOString(),
          status: "inProgress",
        }),
      });

      const waitingOrders = JSON.parse(
        localStorage.getItem("waitingOrders") || "[]"
      );

      waitingOrders.push({
        id: orderId,
        phone,
        address,
        payment,
        delivery,
        items: cartItems.map((item) => ({
          ...item,
          avatar:
            item.avatar ||
            item.image ||
            "https://via.placeholder.com/80x80?text=Product",
        })),
        totalPrice,
        createdAt: new Date().toISOString(),
        status: "inProgress",
      });

      localStorage.setItem("waitingOrders", JSON.stringify(waitingOrders));

      clearCart();
      setSuccess(t[language].success);

      setTimeout(() => {
        navigate("/waitlist");
      }, 2000);
    } catch (err) {
      console.error(err);
      setError(t[language].error);
    }
  };

  return (
    <div className="checkout">
      <h2>{t[language].title}</h2>

      {error && <div className="alert alert-error">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <div className="checkout-items">
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <img src={item.avatar || item.image} alt={item.name} />
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
          {t[language].phoneLabel}
          <input
            type="tel"
            placeholder={t[language].phonePlaceholder}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>

        <label>
          {t[language].addressLabel}
          <input
            type="text"
            placeholder={t[language].addressPlaceholder}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>

        <label>
          {t[language].deliveryLabel}
          <select value={delivery} onChange={(e) => setDelivery(e.target.value)}>
            <option value="courier">{t[language].courier}</option>
            <option value="pickup">{t[language].pickup}</option>
          </select>
        </label>

        <label>
          {t[language].paymentLabel}
          <select value={payment} onChange={(e) => setPayment(e.target.value)}>
            <option value="visa">{t[language].visa}</option>
            <option value="mastercard">{t[language].mastercard}</option>
            <option value="cash">{t[language].cash}</option>
          </select>
        </label>

        <div className="checkout-summary">
          <span>
            {t[language].items}: {cartItems.length} шт.
          </span>
          <span>
            {t[language].total}: {totalPrice.toLocaleString()} ₽
          </span>
        </div>

        <button type="submit" className="checkout-btn">
          {t[language].confirm}
        </button>
      </form>
    </div>
  );
}
