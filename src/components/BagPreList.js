import React from 'react';
import BagPreItem from './BagPreItem';

export default function BagList({ onSubmit, infor, RemoveEvent }) {
  return (
    <div className=" bag-list">
      <div>
        {infor.map(infor => (
          <BagPreItem
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
