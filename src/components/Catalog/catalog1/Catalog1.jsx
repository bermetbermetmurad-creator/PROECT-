import React from "react";
import "./catalog1.css";
import catalog1 from '../../../assets/catalog1.png'

export default function Catalog1() {
  return (
    <div className="catalog-banner">
      <img src={catalog1} alt="catalog background" className="catalog-bg" />
      <h1 className="catalog-title">Каталог</h1>
    </div>
  );
}
