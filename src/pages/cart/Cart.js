import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decCart, incCart, removeFromCart } from "../../context/cartSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Cart() {
  let dispatch = useDispatch();
  let cart = useSelector((state) => state.cart.value);
  window.scrollTo(0, 0);
  //   console.log(cart);

  const handleDecrement = (el) => {
    if (el.quantity < 1) {
      dispatch(removeFromCart(el));
    } else {
      dispatch(decCart(el));
    }
  };

  const cartitem = cart?.map((el) => (
    <div key={el.id} className="cart__title__wrapper">
      <div className="img__title">
        <img src={el.images[0]} alt="" />
        <p>{el.title}</p>
      </div>
      <p className="cart__price">${el.price}</p>
      <div className="cart__incdec">
        <button onClick={() => handleDecrement(el)}>-</button>
        <span>{el.quantity}</span>
        <button onClick={() => dispatch(incCart(el))}>+</button>
        <button
          onClick={() => dispatch(removeFromCart(el))}
          className="delete__btn"
        >
          <FaRegTrashAlt />
        </button>
      </div>
      <p className="cart__subtotal">${el.price * el.quantity}</p>
    </div>
  ));
  const priceitem = cart?.map((el) => (
    <div key={el.id} className="cart__price__wrapper">
      <div>
        <p>Subtotal:</p>
        <p>${el.price * el.quantity}</p>
      </div>
      <hr />
      <div>
        <p>shipping:</p>
        <p>Free</p>
      </div>
      <hr />
      <div>
        <p>total:</p>
        <p>${el.price}</p>
      </div>
    </div>
  ));

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__wrapper">
          <div className="cart__titles">
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Subtotal</h3>
          </div>
          {cartitem}
          <div className="cart__btns">
            <button>Return To Shop</button>
            <button>Update Cart</button>
          </div>
          <div className="card__input__total">
            <div className="card__input__left">
              <input placeholder="Coupon Code" type="text" />
              <button>Apply Coupon</button>
            </div>
            <div className="card__input__right">
              <h2>Cart total</h2>
              {priceitem}
              <NavLink to={"/checkOut"}>Procees to checkout</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
