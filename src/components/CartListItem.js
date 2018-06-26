import React from 'react';

export default function CartListItem({ imgurl, title, price }) {
  return (
    <li>
      <img src={imgurl} alt={title} className="cart-item__list__img" />
      <div className="cart-item__list__title">{title}</div>
      <div className="cart-item__list__price">{price}</div>
      <button className="cart-item__list_btn-remove button">REMOVE</button>
    </li>
  );
}
