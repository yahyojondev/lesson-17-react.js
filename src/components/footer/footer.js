import React from "react";
import { NavLink } from "react-router-dom";
import { BiLogoTelegram } from "react-icons/bi";
import qrcode from "../../assets/images/Qr Code.png";
import playappstor from "../../assets/images/playaapstore.png";
import fullimg from "../../assets/images/facinstwilin.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="footer__wrapper__top">
            <li className="footer__top__item">
              <NavLink className="footer__top__link">Exclusive</NavLink>
              <ul className="footer__top__item__list">
                <li className="footer__top__item__list__item">Subscribe</li>
                <li className="footer__top__item__list__item">
                  Get 10% off your first order
                </li>
                <li className="footer__top__item__list__item item__tele">
                  <input placeholder="Enter your email" type="text" />
                  <BiLogoTelegram />
                </li>
              </ul>
            </li>
            <li className="footer__top__item">
              <NavLink className="footer__top__link">Support</NavLink>
              <ul className="footer__top__item__list">
                <li className="footer__top__item__list__item">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </li>
                <li className="footer__top__item__list__item">
                  exclusive@gmail.com
                </li>
                <li className="footer__top__item__list__item">
                  +88015-88888-9999
                </li>
              </ul>
            </li>
            <li className="footer__top__item">
              <NavLink className="footer__top__link">Account</NavLink>
              <ul className="footer__top__item__list">
                <li className="footer__top__item__list__item">My account</li>
                <li className="footer__top__item__list__item">
                  login / Register
                </li>
                <li className="footer__top__item__list__item">Cart</li>
                <li className="footer__top__item__list__item">wishlist</li>
                <li className="footer__top__item__list__item">shop</li>
              </ul>
            </li>
            <li className="footer__top__item">
              <NavLink className="footer__top__link">Quick Link</NavLink>
              <ul className="footer__top__item__list">
                <li className="footer__top__item__list__item">
                  Privacy Policy
                </li>
                <li className="footer__top__item__list__item">Terms Of Use</li>
                <li className="footer__top__item__list__item">FAQ</li>
                <li className="footer__top__item__list__item">Contact</li>
              </ul>
            </li>
            <li className="footer__top__item">
              <NavLink className="footer__top__link">Download App</NavLink>
              <ul className="footer__top__item__list">
                <li className="footer__top__item__list__item">
                  Save $3 with App New User Only
                </li>
                <li className="footer__top__item__list__item item__two">
                  <img src={qrcode} alt="" />
                  <img src={playappstor} alt="" />
                </li>
                <li className="footer__top__item__list__item">
                  <img src={fullimg} alt="" />
                </li>
              </ul>
            </li>
          </ul>
          <NavLink className="footer__wrapper__bottom">
            Copyright Rimel 2022. All right reserved
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
