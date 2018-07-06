import React from 'react';
import TopItem from './TopItem';

export default function TopList({
  tops,
  onSubmit,
  ClickEvent,
  infor,
  RemoveEvent,
  handleOver,
  handleOut,
}) {
  return (
    <div className="product-layout">
      <div className=" top-list">
        <div>
          {tops.map(top => (
            <TopItem
              key={top.id}
              {...top}
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
