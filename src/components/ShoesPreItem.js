import React from 'react';
import { Link } from 'react-router-dom';
export default function ShoesItem({
  id,
  title,
  body,
  price,
  imgurl,
  onSubmit = () => {},
  RemoveEvent = () => {},
}) {
  return (
    <div className="pre__layout">
      <div className="control">
        <form className="content">
          <img className="pre-img" src={imgurl} alt={title} id="img" />
          <div className="title is-4">{title}</div>
          <div className="subtitle is-6">{body}</div>
          <div className="subtitle is-5">{price}</div>
          <button className="button is-light" onClick={e => onSubmit(id)}>
            cart
          </button>
          <button className="button is-light" onClick={e => RemoveEvent()}>
            exit
          </button>
        </form>
      </div>
    </div>
  );
}
