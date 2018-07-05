import React from 'react';

export default function CartListItem({
  id,
  imgurl,
  title,
  price,
  onRemoveCartItem,
}) {
  return (
    <li>
      <div className="cart-item__list__img-box">
        <img src={imgurl} alt={title} className="cart-item__list__img__item" />
      </div>
      <div className="cart-item__list__title">
        <strong>{title}</strong>
      </div>
      <div className="cart-item__list__price">
        <strong>{price}</strong>
      </div>
      <div className="cart-item__list__btn-box">
        <button
          className="cart-item__list__btn-remove button is-outlined"
          onClick={e => {
            onRemoveCartItem(id);
          }}
        >
          REMOVE
        </button>
      </div>
    </li>
  );
}
