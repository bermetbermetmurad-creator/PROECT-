import { useFavorite } from "./FavoriteContext.jsx";
import { FaTimes } from "react-icons/fa";
import "./FavoriteModal.css";

export default function FavoriteModal() {
  const { favorites, removeFavorite, isFavoriteOpen, setIsFavoriteOpen } = useFavorite();

  return (
    <div className={`favorite-modal ${isFavoriteOpen ? "open" : ""}`}>
      <div className="favorite-header">
        <h3>Избранное</h3>
        <button onClick={() => setIsFavoriteOpen(false)}>✕</button>
      </div>

      {favorites.length === 0 ? (
        <p>Список пуст</p>
      ) : (
        <ul>
          {favorites.map((item, index) => (
            <li key={index} className="favorite-item">
              <img src={item.avatar} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <span>{item.job}</span>
              </div>
              <button onClick={() => removeFavorite(index)}>
                <FaTimes />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
