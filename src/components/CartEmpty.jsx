import React from "react";
import { Link } from "react-router-dom";

import CartEmptyImg from "../assets/img/empty-cart.png";

function CartEmpty() {
  return (
    <div className="cart cart--empty">
      <h2>The cart is empty 😕</h2>
      <p>
        Most probably you haven't odered any sushi.
        <br />
        Go to the main page to do this.
      </p>
      <img src={CartEmptyImg} alt="Empty cart" />
      <Link to="/React-Sushi/" className="button button--black">
        <span>Go Back</span>
      </Link>
    </div>
  );
}

export default CartEmpty;
