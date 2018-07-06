import React from 'react';
import ShoesItem from './ShoesItem';

export default function ShoesList({
  shoes,
  onSubmit,
  ClickEvent,
  infor,
  RemoveEvent,
  handleOver,
  handleOut,
}) {
  return (
    <div className="product-layout">
      <div className=" shoes-list">
        <div>
          {shoes.map(shoes => (
            <ShoesItem
              key={shoes.id}
              {...shoes}
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
