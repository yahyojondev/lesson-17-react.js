import React from "react";
import { NavLink } from "react-router-dom";
import { Routers } from "../../static/Router";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";

function Navbarbotttom() {
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
          <h3 className="navbarbottom__logotext">Exclusive</h3>
          <ul className="navbarbottom__list">{navbarbottomitem}</ul>
          <div className="navbarbottom__right">
            <div className="navbarbottom__search">
              <input placeholder="What are you looking for?" type="text" />
              <FaSearch />
            </div>
            <FaRegHeart className="navbarbottom__svg" />
            <PiShoppingCart className="navbarbottom__svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbarbotttom;
