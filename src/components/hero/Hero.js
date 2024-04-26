import React from "react";
import { MdChevronRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ImAppleinc } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";
import heroimg from "../../assets/images/herobg.png";
import { Swiper, SwiperSlide } from "swiper/react";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__wrapper__left">
            <ul className="hero__wrapper__left__list">
              <li>
                <NavLink className="hero__link">
                  Woman’s Fashion <MdChevronRight />{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="hero__link">
                  Men’s Fashion
                  <MdChevronRight />
                </NavLink>
              </li>
              <li>
                <NavLink className="hero__link">Electronics</NavLink>
              </li>
              <li>
                <NavLink className="hero__link">Home & Lifestyle</NavLink>
              </li>
              <li>
                <NavLink className="hero__link">Medicine</NavLink>
              </li>
              <li>
                <NavLink className="hero__link">Sports & Outdoor</NavLink>
              </li>
              <li>
                <NavLink className="hero__link">Baby’s & Toys</NavLink>
              </li>
              <li>
                <NavLink className="hero__link">Groceries & Pets</NavLink>
              </li>
              <li>
                <NavLink className="hero__link">Health & Beauty</NavLink>
              </li>
            </ul>
          </div>
          <div className="hero__wrapper__right">
            <div className="hero__wrapper__right__left">
              <div>
                <ImAppleinc />
                <p>iPhone 14 Series</p>
              </div>
              <h1>Up to 10% off Voucher</h1>
              <NavLink className="hero__right__link">
                shop Now <FaArrowRight />
              </NavLink>
            </div>
            <img src={heroimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
