import React from 'react';
import { Link } from 'react-router-dom';
import CartListItem from './CartListItem';

export default function CartList({ carts = [] }) {
  let cartTotalPrice = 0;
  for (let i = 0; i < carts.length; i++) {
    cartTotalPrice += parseFloat(carts[i].price.replace(/\$/, ''));
  }
  return carts.length > 0 ? (
    <div className="cart-item">
      <ul className="cart-item__list">
        {carts.map(cart => <CartListItem key={cart.id} {...cart} />)}
      </ul>
      <Link to="/orders">
        Checkout / <span className="unit">${cartTotalPrice}</span>
      </Link>
    </div>
  ) : (
    <div className="cart-noitem">
      <p>The Cart is empty.</p>
      <Link to="/" className="button">
        Continue Browsing
      </Link>
    </div>
  );
}
