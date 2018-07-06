import React from 'react';
export default function BottomItem({
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
          onMouseOver={e => handleOver(id)}
          onMouseOut={e => handleOut(id)}
          src={imgurl}
          alt={title}
          id="img"
          className="bottom-item__list__img"
        />
        <div id="title" className="bottom-item__list__title">
          {title}
        </div>
        <div id="body" className="bottom-item__list__body">
          {body}
        </div>
        <div id="price" className="bottom-item__list__price">
          {price}
        </div>
        <button onClick={e => onSubmit(id)}>add to my cart</button>
      </form>
    </div>
  );
}
