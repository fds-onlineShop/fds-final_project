import React from 'react';

export default function OrderFormItem({ imgurl, title, price }) {
  return (
    <li>
      <div className="orderForm__order__list__img-box">
        <img
          src={imgurl}
          alt={title}
          className="orderForm__order__list__img__item"
        />
      </div>
      <div className="orderForm__order__list__title">{title}</div>
      <div className="orderForm__order__list__price">{price}</div>
    </li>
  );
}
