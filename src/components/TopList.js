import React from 'react';
import { Link } from 'react-router-dom';
import TopItem from './TopItem';

export default function TopList({
  tops,
  onSubmit,
  ClickEvent,
  infor,
  RemoveEvent,
}) {
  return (
    <div className=" top-list">
      <div>
        {tops.map(top => (
          <TopItem
            key={top.id}
            {...top}
            onSubmit={onSubmit}
            ClickEvent={ClickEvent}
            RemoveEvent={RemoveEvent}
          />
        ))}
      </div>
    </div>
  );
}
