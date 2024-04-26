import React from "react";
import { NavLink } from "react-router-dom";
import { Routers } from "../../static/Router";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { useSelector } from "react-redux";

function Navbarbotttom() {
  const wishes = useSelector((state) => state.wishlist.value).length;
  const cart = useSelector((state) => state.cart.value).length;

  let navbarbottomitem = Routers?.map((el) => (
    <li key={el.id} className="navbarbottom__item">
      <NavLink className="navbarbottom__link" to={el.path}>
        {el.title}
      </NavLink>
    </li>
  ));
  return (
    <div className="navbarbottom">
      <div className="container">
        <div className="navbarbottom__wrapper">
          <NavLink to={"/"} className="navbarbottom__logotext">
            Exclusive
          </NavLink>
          <ul className="navbarbottom__list">{navbarbottomitem}</ul>
          <div className="navbarbottom__right">
            <div className="navbarbottom__search">
              <input placeholder="What are you looking for?" type="text" />
              <FaSearch />
            </div>
            <NavLink to={"/wishlist"} className="wishlist__link">
              <FaRegHeart className="navbarbottom__svg" />
              <span>{wishes}</span>
            </NavLink>
            <NavLink to={"/cart"} className="wishlist__link">
              <PiShoppingCart className="navbarbottom__svg" />
              <span>{cart}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbarbotttom;
