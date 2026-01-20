import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./WaitList.css";

const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000; 

const WaitList = () => {
  const [waitingOrders, setWaitingOrders] = useState([]);
  const navigate = useNavigate();

  const t = {
    title: "Лист ожидания",
    subtitle: "Ваши заказы в процессе обработки",
    empty: "Нет заказов в листе ожидания",
    order: "Заказ",
    product: "Товары",
    total: "Итого",
    status: "Статус",
    waitingTime: "Время ожидания",
    days: "д",
    hours: "ч",
    minutes: "м",
    seconds: "с",
    inProgress: "В обработке",
    shipped: "Отправлен",
    delivered: "Доставлен",
    delete: "Удалить",
    continue: "Продолжить покупки",
  };


  useEffect(() => {
    const saved = localStorage.getItem("waitingOrders");
    if (saved) {
      const orders = JSON.parse(saved).map(o => ({
        ...o,
      
        createdAt: o.createdAt || new Date().toISOString()
      }));
      setWaitingOrders(orders);
    }
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setWaitingOrders(prev => [...prev]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatCountdown = (createdAt) => {
    const endTime = new Date(createdAt).getTime() + FIVE_DAYS_MS;
    const diff = Math.max(endTime - Date.now(), 0);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const updateStatus = (id, status) => {
    const updated = waitingOrders.map(o => (o.id === id ? { ...o, status } : o));
    setWaitingOrders(updated);
    localStorage.setItem("waitingOrders", JSON.stringify(updated));
  };

  const deleteOrder = (id) => {
    const updated = waitingOrders.filter(o => o.id !== id);
    setWaitingOrders(updated);
    localStorage.setItem("waitingOrders", JSON.stringify(updated));
  };

  return (
    <div className="waitlist-container">
      <div className="waitlist-header">
        <h1>{t.title}</h1>
        <p className="waitlist-subtitle">{t.subtitle}</p>
      </div>

      {waitingOrders.length === 0 ? (
        <div className="waitlist-empty">
          <div className="olive-icon">🫒</div>
          <h2>{t.empty}</h2>
          <button className="back-btn" onClick={() => navigate("/catalog")}>
            {t.continue}
          </button>
        </div>
      ) : (
        <div className="waitlist-orders">
          {waitingOrders.map(order => {
            const countdown = formatCountdown(order.createdAt);
            const total = order.totalPrice || 0;

            return (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <h3>{t.order} #{order.id.slice(-6)}</h3>
                  <span className={`status ${order.status || "inProgress"}`}>
                    {t[order.status] || t.inProgress}
                  </span>
                </div>

                <div className="order-content">
                  {(order.items || []).map((item, i) => {
                    const price = item.price || 0;
                    const quantity = item.quantity || 1;
                    return (
                      <div key={i} className="order-item">
                        <img
                          src={item.avatar || "https://via.placeholder.com/80"}
                          alt={item.name || "Product"}
                          className="item-image"
                        />
                        <div className="item-details">
                          <h4>{item.name || "Товар"}</h4>
                          <p>{quantity} × {price.toLocaleString()} ₽</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="order-footer">
                  <div className="total-price">{t.total}: {total.toLocaleString()} ₽</div>

                  <div className="status-buttons">
                    <button
                      className={`status-btn ${order.status === "inProgress" ? "active" : ""}`}
                      onClick={() => updateStatus(order.id, "inProgress")}
                    >
                      {t.inProgress}
                    </button>
                    <button
                      className={`status-btn ${order.status === "shipped" ? "active" : ""}`}
                      onClick={() => updateStatus(order.id, "shipped")}
                    >
                      {t.shipped}
                    </button>
                    <button
                      className={`status-btn ${order.status === "delivered" ? "active" : ""}`}
                      onClick={() => updateStatus(order.id, "delivered")}
                    >
                      {t.delivered}
                    </button>
                  </div>

                  <div className="timer">
                    {countdown.days}{t.days} {countdown.hours}{t.hours} {countdown.minutes}{t.minutes} {countdown.seconds}{t.seconds}
                  </div>

                  <button className="delete-btn" onClick={() => deleteOrder(order.id)}>
                    {t.delete}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WaitList;
