import React from "react";
import { RouterProvider } from "react-router-dom";
import { muRouter } from "./Router";
import { LanguageProvider } from "./components/LanguageContext/LanguageContext.jsx";
import { CartProvider } from "./components/CartContext/CartContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FavoriteProvider } from "./components/FavoriteContext.jsx";

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <FavoriteProvider>
          <RouterProvider router={muRouter} />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            pauseOnHover
            theme="light"
          />
        </FavoriteProvider>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
