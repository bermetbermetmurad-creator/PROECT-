import React from "react";
import { RouterProvider } from "react-router-dom";
import { muRouter } from "./Router";
import { LanguageProvider } from "./components/LanguageContext/LanguageContext.jsx";
import { CartProvider } from "./components/CartContext/CartContext.jsx";
import { FavoriteProvider } from "./components/FavoriteContext.jsx";
import { UserProvider } from "./components/UserContext/UserContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <LanguageProvider>
      <UserProvider>
        <CartProvider>
          <FavoriteProvider>
            <RouterProvider router={muRouter} />
            <ToastContainer
              position="top-right"
              autoClose={2000}
              pauseOnHover
              theme="light"
            />
          </FavoriteProvider>
        </CartProvider>
      </UserProvider>
    </LanguageProvider>
  );
}

export default App;
