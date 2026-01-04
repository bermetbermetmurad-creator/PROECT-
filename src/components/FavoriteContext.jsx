import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);


  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (item) => {

    if (!favorites.find(fav => fav.id === item.id)) {
      setFavorites(prev => [...prev, item]);
      toast.success("Товар добавлен в избранное!");
    } else {
      toast.info("Товар уже в избранном");
    }
  };

  const removeFavorite = (index) => {
    setFavorites(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <FavoriteContext.Provider 
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavoriteOpen,       
        setIsFavoriteOpen     
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => useContext(FavoriteContext);
