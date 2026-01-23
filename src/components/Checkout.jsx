import React, { useState } from "react";
import { useCart } from "./CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import { sendOrderEmail } from "./sendOrderEmail";
import "./Checkout.css";

const ORDER_API = "https://691a97112d8d7855756f513a.mockapi.io/orders";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const language = "ru";

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("visa");
  const [cardNumber, setCardNumber] = useState("");
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
      phonePlaceholder: "+996 ХХХ ХХХ ХХХ",
      addressPlaceholder: "Улица, дом, квартира",
      courier: "Курьером",
      pickup: "Самовывоз",
      visa: "Visa",
      mastercard: "MasterCard",
      cash: "Наличные",
      cardNumber: "Номер карты",
      phoneError: "Введите корректный номер телефона",
      addressError: "Введите корректный адрес",
      emptyCart: "Корзина пуста",
      confirm: "Подтвердить заказ",
    },
  };

  const validateForm = () => {
    if (!/^\+996\d{9}$/.test(phone)) {
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

    if ((payment === "visa" || payment === "mastercard") && cardNumber.length < 16) {
      setError("Введите корректный номер карты");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const orderId = `order_${Date.now()}`;

      await fetch(ORDER_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: orderId,
          phone,
          address,
          payment,
          cardNumber: payment !== "cash" ? cardNumber : "",
          delivery,
          items: cartItems,
          totalPrice,
          createdAt: new Date().toISOString(),
          status: "inProgress",
        }),
      });

      await sendOrderEmail({
        userName: "Новый клиент",
        userEmail: "no-reply@site.com",
        phone,
        address,
        payment,
        cardNumber: payment !== "cash" ? cardNumber : "",
        delivery,
        cartItems,
        totalPrice,
      });

      const waitingOrders = JSON.parse(localStorage.getItem("waitingOrders") || "[]");

      waitingOrders.push({
        id: orderId,
        phone,
        address,
        payment,
        cardNumber: payment !== "cash" ? cardNumber : "",
        delivery,
        items: cartItems,
        totalPrice,
        createdAt: new Date().toISOString(),
        status: "inProgress",
      });

      localStorage.setItem("waitingOrders", JSON.stringify(waitingOrders));

      clearCart();
      setSuccess(t[language].success);

      setTimeout(() => navigate("/waitlist"), 2000);
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
            <div>
              <p>{item.name}</p>
              <p>{item.quantity} шт.</p>
              <p>{item.price * item.quantity} ₽</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          placeholder={t[language].phonePlaceholder}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          placeholder={t[language].addressPlaceholder}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <select value={delivery} onChange={(e) => setDelivery(e.target.value)}>
          <option value="courier">{t[language].courier}</option>
          <option value="pickup">{t[language].pickup}</option>
        </select>

        <select value={payment} onChange={(e) => setPayment(e.target.value)}>
          <option value="visa">{t[language].visa}</option>
          <option value="mastercard">{t[language].mastercard}</option>
          <option value="cash">{t[language].cash}</option>
        </select>

        {(payment === "visa" || payment === "mastercard") && (
          <input
            placeholder={t[language].cardNumber}
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength={19}
          />
        )}

        <button type="submit">{t[language].confirm}</button>
      </form>
    </div>
  );
}
