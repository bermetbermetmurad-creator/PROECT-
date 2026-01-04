import { useCart } from "../CartContext/CartContext.jsx";
import { useState } from "react";
import "./CartModal.css";

export default function CartModal() {
  const { cartItems, isCartOpen, setIsCartOpen, clearCart, updateCartItemQuantity } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleOrder = () => {
    setShowToast(true);
    clearCart();
    setTimeout(() => {
      setShowToast(false);
      setIsCartOpen(false);
    }, 2000);
  };

  const handleIncrease = (index) => {
    updateCartItemQuantity(index, cartItems[index].quantity + 1);
  };

  const handleDecrease = (index) => {
    const newQty = cartItems[index].quantity - 1;
    if (newQty <= 0) {
      updateCartItemQuantity(index, 0, true); // true = удалить элемент полностью
    } else {
      updateCartItemQuantity(index, newQty);
    }
  };

  return (
    <>
      <div className={`cart-modal ${isCartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h3>🛒 Корзина</h3>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty">Корзина пуста</p>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item, i) => (
                <li key={i}>
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

            <button className="order-btn" onClick={handleOrder}>
              Оформить заказ
            </button>
          </>
        )}
      </div>

      {showToast && (
        <div className="toast">
          ✅ Покупка успешно оформлена!
        </div>
      )}
    </>
  );
}
