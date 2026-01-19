import { useCart } from "../CartContext/CartContext.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CartModal.css";

export default function CartModal() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    clearCart,
    updateCartItemQuantity,
  } = useCart();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  const handleIncrease = (index) => {
    updateCartItemQuantity(index, cartItems[index].quantity + 1);
  };

  const handleDecrease = (index) => {
    const newQty = cartItems[index].quantity - 1;
    if (newQty <= 0) {
      updateCartItemQuantity(index, 0, true);
    } else {
      updateCartItemQuantity(index, newQty);
    }
  };

  const handleClearCart = () => {
    clearCart();
    setToastMessage("Корзина очищена!");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1000);
  };

  return (
    <>
      <div className={`cart-modal ${isCartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Корзина</h3>
          <div className="cart-header-buttons">
            <button className="clear-btn" onClick={handleClearCart}>🗑</button>
            <button className="close-btn" onClick={() => setIsCartOpen(false)}>✕</button>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty">Корзина пуста</p>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item, i) => (
                <li key={item.id || i}>
                  <img src={item.avatar} alt={item.name} />
                  <div className="info">
                    <p>{item.name}</p>
                    <span>{item.job}</span>

                    <div className="quantity">
                      <button onClick={() => handleDecrease(i)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrease(i)}>+</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <button className="order-btn" onClick={handleGoToCheckout}>
              Оформить заказ
            </button>
          </>
        )}
      </div>

      {showToast && <div className="toast">{toastMessage}</div>}
    </>
  );
}
