import React from 'react';
import { Link } from 'react-router-dom';
export default function TopItem({
  id,
  title,
  body,
  price,
  imgurl,
  onSubmit = () => {},
  ClickEvent = () => {},
  RemoveEvent = () => {},
}) {
  return (
    <div className="top-item__layout">
      <div className="control">
        <div className="content">
          <a onClick={e => ClickEvent(id)}>
            <img
              src={imgurl}
              alt={title}
              id="img"
              className="card-image"
              onClick={e => RemoveEvent()}
            />
          </a>
          <div className="title is-4">{title}</div>
        </div>
      </div>
    </div>
  );
}
