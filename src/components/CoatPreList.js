import React from 'react';
import CoatPreItem from './CoatPreItem';

export default function CoatList({ onSubmit, infor, RemoveEvent }) {
  return (
    <div className=" coat-list">
      <div>
        {infor.map(infor => (
          <CoatPreItem
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
