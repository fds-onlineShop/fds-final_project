import React from 'react';
import BottomPreItem from './BottomPreItem';

export default function BottomList({ onSubmit, infor, RemoveEvent }) {
  return (
    <div className=" bottom-list">
      <div>
        {infor.map(infor => (
          <BottomPreItem
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
