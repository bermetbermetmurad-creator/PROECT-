import React from 'react';
import './Footer.css';
import logo2 from '../../assets/Group2.png'
import insta from '../../assets/insta.png'
import fasbook from '../../assets/fasbook.png'
import printerest from '../../assets/printerest.png'
import twiter from '../../assets/twiter.png'
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo2} alt="logo2" className="logo"/> <h1 className='section-title1'>Belaléa</h1>
          <a href="https://www.instagram.com/belalea.by"><img src={insta} alt="insta" /></a>
          <a href="https://vk.com/belalea"><img src={fasbook} alt="fasbook" /></a>
          <a href="https://ru.pinterest.com"><img src={printerest} alt="printerest" /></a>
          <a href="https://x.com/imbellarollandx"><img src={twiter} alt="twiter" /></a>
        </div>


        <div className="footer-section">
          <h3 className="section-title">Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href="mailto:needhelp@Organia.com" className="contact-link">
                needhelp@Organia.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone</span>
              <a href="tel:666888888" className="contact-link">
                666 888 888
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Address</span>
              <span className="contact-text">
                88 road, borklyn street, USA
              </span>
            </div>
          </div>
        </div>


        <div className="footer-section">
          <h3 className="section-title">Belaléa</h3>
          <p className="social-description">
            Следите за новостями и акциями<br />
            в наших социальных сетях, подпишитесь!
          </p>
        </div>


        <div className="footer-section">
          <h3 className="section-title">Utility Pages</h3>
          <ul className="utility-list">
            <li><a href="#" className="utility-link">Style Guide</a></li>
            <li><Link to="mycomp" className="utility-link">404 Not Found</Link></li>
            <li><a href="#" className="utility-link">Password Protected</a></li>
            <li><a href="#" className="utility-link">Licences</a></li>
            <li><a href="#" className="utility-link">Changelog</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;