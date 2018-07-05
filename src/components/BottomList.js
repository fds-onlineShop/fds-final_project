import React from 'react';

import BottomItem from './BottomItem';

export default function BottomList({
  bottoms,
  onSubmit,
  handleOver,
  handleOut,
}) {
  return (
    <div className="product-layout">
      <div>
        {bottoms.map(bottom => (
          <BottomItem
            key={bottom.id}
            {...bottom}
            onSubmit={onSubmit}
            handleOver={handleOver}
            handleOut={handleOut}
          />
        ))}
      </div>
    </div>
  );
}
