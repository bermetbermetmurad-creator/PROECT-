import { createContext, useContext, useEffect, useState } from "react";
import { sendLoginEmail, sendLogoutEmail } from "../emailService";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const updateUser = async (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));

    try {
      await sendLoginEmail(data);
      console.log("📧 Email о входе отправлен");
    } catch (err) {
      console.error("Ошибка отправки email входа:", err);
    }
  };

  const logout = async () => {
    if (user) {
      try {
        await sendLogoutEmail(user);
        console.log("📧 Email о выходе отправлен");
      } catch (err) {
        console.error("Ошибка отправки email выхода:", err);
      }
    }

    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
