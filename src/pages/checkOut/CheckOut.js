import React from "react";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import checkoutimg from "../../assets/images/checkoutimg.png";

function CheckOut() {
  const cart = useSelector((state) => state.cart.value);

  let checkOutitem = cart?.map((el) => (
    <div className="checkoutcart__wrapper" key={el.id}>
      <ul>
        <li>
          <div>
            <img src={el.images[1]} alt="" />
            <p>LCD Monitor</p>
          </div>
          <p>${el.price}</p>
        </li>
        <li>
          <div>
            <img src={el.images[0]} alt="" />
            <p>LCD Monitor</p>
          </div>
          <p>${el.price}</p>
        </li>
      </ul>
      <ul className="checkcart__list">
        <li>
          <p>Subtotal:</p>
          <p>${el.price * el.quantity}</p>
        </li>
        <hr />
        <li>
          <p>Shipping:</p>
          <p>Free</p>
        </li>
        <hr />
        <li>
          <p>Total:</p>
          <p>${el.price * el.quantity}</p>
        </li>
      </ul>
    </div>
  ));
  return (
    <div className="checkOut">
      <div className="container">
        <div className="checkOut__wrapper">
          <h2>Billing Details</h2>
          <div className="checkOut__leftright">
            <div className="checkOut__left">
              <div className="form__wrapper">
                <form action="">
                  <p>First Name</p>
                  <input type="text" />
                </form>
                <form action="">
                  <p>Street Address*</p>
                  <input type="text" />
                </form>
                <form action="">
                  <p>Apartment, floor, etc. (optional)</p>
                  <input type="text" />
                </form>
                <form action="">
                  <p>Phone Number*</p>
                  <input type="text" />
                </form>
              </div>
              <div className="inputcheckbox__wrapper">
                <input type="checkbox" />
                <p>Save this information for faster check-out next time</p>
              </div>
            </div>
            <div className="checkOut__right">
              {checkOutitem}
              <div className="checkOut__right__wrapper">
                <form action="">
                  <div>
                    <input type="radio" />
                    <p>Bank</p>
                  </div>
                  <div>
                    <input type="radio" />
                    <p>Cash on delivery</p>
                  </div>
                </form>
                <div className="checkOut__img__wrapper">
                  <img src={checkoutimg} alt="" />
                </div>
              </div>
              <div className="checkOut__right__bottom">
                <form className="checkOut__btns__form">
                  <input placeholder="Coupon Code" type="text" />
                  <button>Apply Coupon</button>
                </form>
                <button className="checkOut__bottom__btn">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
