import React from 'react';
import { Link } from 'react-router-dom';
export default function TopItem({ title, body, price, imgurl, onSubmit }) {
  return (
    <Link to="/top">
      <div>
        <form>
          <img src={imgurl} alt={title} className="top-item__list__img" />
          <div className="top-item__list__title">{title}</div>
          <div className="top-item__list__body">{body}</div>
          <div className="top-item__list__price">{price}</div>
          <button onClick={onSubmit}>add to my cart</button>
        </form>
      </div>
    </Link>
  );
}
