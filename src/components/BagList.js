import React from 'react';
import BagItem from './BagItem';

export default function BagList({
  bags,
  onSubmit,
  ClickEvent,
  infor,
  RemoveEvent,
  handleOver,
  handleOut,
}) {
  return (
    <div className="product-layout">
      <div className=" bag-list">
        <div>
          {bags.map(bag => (
            <BagItem
              key={bag.id}
              {...bag}
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
