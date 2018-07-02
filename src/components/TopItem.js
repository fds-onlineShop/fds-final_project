import React from 'react';
import { Link } from 'react-router-dom';
export default function TopItem({
  id,
  title,
  body,
  price,
  imgurl,
  onSubmit = () => {},
  carttitle,
  cartprice,
  cartimgurl,
}) {
  return (
    <div>
      <form>
        <img
          src={imgurl}
          alt={title}
          id="img"
          className="top-item__list__img"
        />
        <div id="title" className="top-item__list__title">
          {title}
        </div>
        <div id="body" className="top-item__list__body">
          {body}
        </div>
        <div id="price" className="top-item__list__price">
          {price}
        </div>
        <button onClick={e => onSubmit(id)}>add to my cart</button>
      </form>
    </div>
  );
}
