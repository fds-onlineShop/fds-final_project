import React from 'react';

import BagItem from './BagItem';

export default function BagList({ bags, onSubmit, handleOver, handleOut }) {
  return (
    <div className="product-layout">
      <div>
        {bags.map(bag => (
          <BagItem
            key={bag.id}
            {...bag}
            onSubmit={onSubmit}
            handleOver={handleOver}
            handleOut={handleOut}
          />
        ))}
      </div>
    </div>
  );
}
