import React from 'react';
import { Link } from 'react-router-dom';
export default function ShoesItem({
  id,
  title,
  body,
  price,
  imgurl,
  onSubmit = () => {},
}) {
  return (
    <div>
      <form>
        <img
          src={imgurl}
          alt={title}
          id="img"
          className="Shoes-item__list__img"
        />
        <div id="title" className="Shoes-item__list__title">
          {title}
        </div>
        <div id="body" className="Shoes-item__list__body">
          {body}
        </div>
        <div id="price" className="Shoes-item__list__price">
          {price}
        </div>
        <button onClick={e => onSubmit(id)}>add to my cart</button>
      </form>
    </div>
  );
}
