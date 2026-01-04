import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css";
import { toast } from "react-toastify";
import { useCart } from "../CartContext/CartContext.jsx";
import { useFavorite } from "../FavoriteContext.jsx";

const API_URL = "https://691a97112d8d7855756f513a.mockapi.io/myApi";

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addFavorite } = useFavorite();

  const handleFavorite = () => {
  addFavorite(product);
};

  const addProduct = () => {
    addToCart(product);
    toast.success("🛒 Товар добавлен в корзину!", {
      position: "top-right",
    });
  };

  const [product, setProduct] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const current = data.find(item => item.id === id);
        if (!current) return;

        setProduct(current);
        setActiveImage(current.avatar);

        const related = data
          .filter(item => item.job === current.job)
          .slice(0, 4);

        setGallery(related);
      });
  }, [id]);

if (!product) return <p className="loading-text">Загрузка...</p>;


  return (
    <div className="product-page">
      <div className="product">

        <div className="product-images">
          <img
            src={activeImage}
            alt={product.name}
            className="main-image"
          />

          <div className="thumbnails">
            {gallery.map(item => (
              <img
                key={item.id}
                src={item.img}
                alt={item.name}
                className={
                  activeImage === item.img ? "thumb active" : "thumb"
                }
                onClick={() => setActiveImage(item.img)}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <span className="category">{product.job}</span>

          <p className="description">
            {product.name} — качественный продукт категории «{product.job}».
            Подходит для повседневного использования.
          </p>

          <div className="actions">
            <button className="cart" onClick={addProduct}>
              В корзину
            </button>
            <button className="favorite" onClick={handleFavorite}>
              В избранное
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
