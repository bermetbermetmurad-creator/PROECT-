import React from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-container">
      <h2>CONTACT US</h2>

      <div className="contact-item">
        <span className="contact-label">EMAIL</span>
        <span className="contact-info">needhelp@Organia.com</span>
      </div>

      <div className="contact-item">
        <span className="contact-label">PHONE</span>
        <span className="contact-info">666 888 888</span>
      </div>

      <div className="contact-item">
        <span className="contact-label">ADDRESS</span>
        <span className="contact-info">88 road, borklyn street, USA</span>
      </div>

      <button className="back-btn" onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
};

export default Contact;
