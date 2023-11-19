import React from "react";
import "./Footer.css";
import logo_footer from "../Assets/logo-footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo_footer} alt=""/>
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="footer-icons-container">
        <FontAwesomeIcon icon={faWhatsapp} />
        </div>
        <div className="footer-icons-container">
        <FontAwesomeIcon icon={faFacebook} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
