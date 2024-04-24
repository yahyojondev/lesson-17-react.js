import React from "react";
import { NavLink } from "react-router-dom";

function Cards() {
  return (
    <div className="cards">
      <div className="container">
        <div className="cards__wrapper">
          <div className="cards__top">
            <div className="cards__top__wrapper">
              <span className="cards__top__wrapper__span"></span>
              <h3>This Month</h3>
            </div>
            <div className="cards__top__wrapper__two">
              <h2>Best Selling Products</h2>
              <button className="cards__top__btn">wiew All</button>
            </div>
          </div>
          <div className="cards__bottom">
            <div className="cards__bottom__card">
              <img src="" alt="" />
              <div className="card__content">
                <h4></h4>
                <div className="price__wrapper">
                  <p></p>
                  <p></p>
                </div>
                <div className="limits__wrapper">
                  <img src="" alt="" />
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
