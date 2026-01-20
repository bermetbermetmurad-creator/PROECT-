import React, { useEffect, useState } from "react";
import "./Catalog2.css";
import { Link } from "react-router-dom";

export default function Catalog2() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://691a97112d8d7855756f513a.mockapi.io/myApi")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="catalog2-container">
      <div className="catalog2-grid">
        {items.map((item) => (
          <Link
            to={`/catalog/${item.id}`}
            key={item.id}
            className="catalog2-card"
          >
            <div className="catalog2-badge">{item.job}</div>
            <img
              src={item.avatar}
              alt={item.name}
              className="catalog2-img"
            />
            <p className="catalog2-title">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
