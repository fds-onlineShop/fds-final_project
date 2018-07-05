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
      <img src={imgurl} alt={title} className="cart-item__list__img" />
      <div className="cart-item__list__title">{title}</div>
      <div className="cart-item__list__price">{price}</div>
      <button
        className="cart-item__list_btn-remove button"
        onClick={e => {
          onRemoveCartItem(id);
        }}
      >
        REMOVE
      </button>
    </li>
  );
}
