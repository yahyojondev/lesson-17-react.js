import React from "react";
import { NavLink } from "react-router-dom";
import { cardproduct } from "../../static/Router";

function Cards() {
  let cardsitem = cardproduct?.map((el) => (
    <div key={el.id} className="cards__bottom__card">
      <div className="cards__bottom__img__wrapper">
        <img className="cards__bottom__img" src={el.img} alt={el.title} />
      </div>
      <div className="card__content">
        <h4>{el.title}</h4>
        <div className="price__wrapper">
          <p>{el.price}</p>
          <del>{el.delprice}</del>
        </div>
        <div className="limits__wrapper">
          <img src={el.stars} alt="" />
          <p>{el.limit}</p>
        </div>
      </div>
    </div>
  ));
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
          <div className="cards__bottom">{cardsitem}</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
