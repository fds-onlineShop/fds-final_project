import React from 'react';

export default function OrderFormItem({ imgurl, title, price }) {
  return (
    <li>
      <img src={imgurl} alt={title} className="orderForm__list__img" />
      <div className="orderForm__list__title">{title}</div>
      <div className="orderForm__list__price">{price}</div>
    </li>
  );
}
