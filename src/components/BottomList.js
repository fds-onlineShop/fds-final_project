import React from 'react';
import BottomItem from './BottomItem';

export default function BottomList({
  bottoms,
  onSubmit,
  ClickEvent,
  infor,
  RemoveEvent,
  handleOver,
  handleOut,
}) {
  return (
    <div className="product-layout">
      <div className=" bottom-list">
        <div>
          {bottoms.map(bottom => (
            <BottomItem
              key={bottom.id}
              {...bottom}
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
