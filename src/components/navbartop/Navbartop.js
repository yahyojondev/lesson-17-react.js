import React from "react";
import { NavLink } from "react-router-dom";

function Navbartop() {
  return (
    <div className="navbartop">
      <div className="container">
        <div className="navbartop__wrapper">
          <div className="navbartop__links">
            <NavLink>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </NavLink>
            <NavLink className="navbartop__link">ShopNow</NavLink>
          </div>
          <select name="" id="">
            <option value="English">English</option>
            <option value="English">Russiona</option>
            <option value="English">Uzbek</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Navbartop;
