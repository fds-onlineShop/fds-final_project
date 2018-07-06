import React from 'react';
import ShoesPreItem from './ShoesPreItem';

export default function ShoesList({ onSubmit, infor, RemoveEvent }) {
  return (
    <div className=" shoes-list">
      <div>
        {infor.map(infor => (
          <ShoesPreItem
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
