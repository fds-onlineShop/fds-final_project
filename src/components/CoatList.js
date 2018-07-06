import React from 'react';
import CoatItem from './CoatItem';

export default function CoatList({
  coats,
  onSubmit,
  ClickEvent,
  infor,
  RemoveEvent,
  handleOver,
  handleOut,
}) {
  return (
    <div className="product-layout">
      <div className=" coat-list">
        <div>
          {coats.map(coat => (
            <CoatItem
              key={coat.id}
              {...coat}
              onSubmit={onSubmit}
              handleOver={handleOver}
              handleOut={handleOut}
              ClickEvent={ClickEvent}
              RemoveEvent={RemoveEvent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
