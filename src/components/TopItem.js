import React from 'react';

export default function TopItem({
  id,
  title,
  body,
  price,
  imgurl,
  onSubmit = () => {},
  handleOver = () => {},
  handleOut = () => {},
}) {
  return (
    <div>
      <form>
        <img
          onMouseOver={e => {
            e.preventDefault();
            handleOver(id);
          }}
          onMouseOut={e => {
            e.preventDefault();
            handleOut(id);
          }}
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
