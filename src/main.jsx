import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./components/CartContext/CartContext.jsx";
import { FavoriteProvider } from "./components/FavoriteContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <FavoriteProvider>
      <App />
      </FavoriteProvider>
    </CartProvider>
  </StrictMode>
);
