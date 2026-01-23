import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css";
import { toast } from "react-toastify";
import { useCart } from "../CartContext/CartContext.jsx";
import { useFavorite } from "../FavoriteContext.jsx";
import { useUser } from "../UserContext/UserContext.jsx";

const API_URL = "https://691a97112d8d7855756f513a.mockapi.io/myApi";


const getPriceById = (id) => {
  const prices = {
    "1": 1200,
    "2": 950,
    "3": 1800,
    "4": 700,
    "5": 1500,
    "6": 2200,
    "7": 1300,
    "8": 890,
  };

  return prices[id] || 999; 
};

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addFavorite } = useFavorite();
  const { user } = useUser();

  const [product, setProduct] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [activeImage, setActiveImage] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setAllProducts(data);

        const current = data.find(item => item.id === id);
        if (!current) return;

        setProduct(current);
        setActiveImage(current.avatar);

        const related = data
          .filter(item => item.job === current.job && item.id !== current.id)
          .slice(0, 4);

        setGallery(related);
      });
  }, [id]);

  const handleThumbClick = (item) => {
    setProduct(item);
    setActiveImage(item.img || item.avatar);

    const related = allProducts
      .filter(prod => prod.job === item.job && prod.id !== item.id)
      .slice(0, 4);

    setGallery(related);
  };

  const openLoginModal = () => {
    const loginBtn = document.querySelector(".login-btn");
    if (loginBtn) loginBtn.click();
  };

  const handleFavorite = () => {
    if (!user) {
      toast.error("Сначала войдите в аккаунт");
      openLoginModal();
      return;
    }

    addFavorite(product);
  };

  const addProduct = () => {
    if (!user) {
      toast.error("Сначала войдите или зарегистрируйтесь");
      openLoginModal();
      return;
    }

    const price = Number(product.price || getPriceById(product.id));

    addToCart({
      ...product,
      price,
      quantity: 1,
    });

    toast.success("Товар добавлен в корзину!", {
      position: "top-right",
    });
  };

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
                src={item.img || item.avatar}
                alt={item.name}
                className={
                  activeImage === (item.img || item.avatar)
                    ? "thumb active"
                    : "thumb"
                }
                onClick={() => handleThumbClick(item)}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <span className="category">{product.job}</span>


          <div className="price">
            {getPriceById(product.id).toLocaleString()} ₽
          </div>

          <p className="description">
            {product.name} — это качественный и надежный продукт из категории «{product.job}»,
            созданный с вниманием к деталям и высоким стандартам качества.
            Он отлично подходит для повседневного использования, обеспечивая комфорт,
            удобство и долгий срок службы.
            Продукт сочетает в себе современный дизайн и практичность,
            благодаря чему станет отличным выбором как для личного использования,
            так и в качестве подарка.
            Выбирая {product.name}, вы получаете уверенность в качестве
            и удовольствие от каждого дня использования.
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
