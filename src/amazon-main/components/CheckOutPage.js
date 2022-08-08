import "./CheckOutPage.css";
// import CurrencyFormat from "react-currency-format";
import React, { useState, useEffect } from "react";
import { CartState } from "../functionality/Context.js";
import CheckOutCard from "./CheckOutCard.js";

const CheckOutPage = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  // let initial = 0;
  // cart.map((p) => {
  //   initial = initial + p.price.split(".")[0] * p.qty;
  //   console.log(p.price.split(".")[0], p.qty, p.price.split(".")[0] * p.qty);
  //   console.log(initial);
  //   setTotal(initial);
  // });

  // function FunctionTotal(total, number){
  //   return total + number;
  // }
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      // cart.reduce((FunctionTotal))
      cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0)
    );
  }, [cart]);
  // console.log(cart);
  // console.log(total);

  const checkoutFunction = (e) => {
    e.preventDefault();
    alert(`You ordered ${cart.length} items.`);
  };
  return (
    <div className="checkout-container">
      <div className="checkout-left-box">
        <div className="checkout-left-text-cart">Shopping Cart</div>
        <div className="checkout-item-list">
          <div className="checkout-item-list-item">
            {cart.map((product) => (
              <CheckOutCard dispatch={dispatch} product={product} />
            ))}
          </div>
        </div>
        <div className="checkout-left-text-total">
          <div className="subtotalText">
            <p>
              SubTotal ({cart.length} items): <strong>₹{total}</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="subtotal">
          <div className="subtotalText">
            <p>
              SubTotal ({cart.length} items): <strong>₹{total}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" className="subtotal-gift-input" />
              <p>This order contains a gift</p>
            </small>
          </div>
          <button onClick={checkoutFunction} className="subtotalButton">
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
