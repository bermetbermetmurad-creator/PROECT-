import "./MyComponent.css";
import { Link } from "react-router-dom";
import bg from "../../assets/404.png";   

export default function MyComponent() {
  return (
    <div className="notfound" style={{ backgroundImage: `url(${bg})` }}>
      <div className="content">
        <h1>404</h1>
        <h2>Страница не найдена</h2>
        <p>The page you are looking for doesn't exist or has been moved</p>

        <Link to="/catalog" className="notfound-btn">
          В каталог
        </Link>
      </div>
    </div>
  );
}
