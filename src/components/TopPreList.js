import React from 'react';
import { Link } from 'react-router-dom';
import TopPreItem from './TopPreItem';

export default function TopList({ onSubmit, infor, RemoveEvent }) {
  return (
    <div className=" top-list">
      <div>
        {infor.map(infor => (
          <TopPreItem
            key={infor.id}
            {...infor}
            onSubmit={onSubmit}
            RemoveEvent={RemoveEvent}
          />
        ))}
      </div>
    </div>
  );
}
