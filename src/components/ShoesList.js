import React from 'react';

import ShoesItem from './ShoesItem';

export default function ShoesList({ shoes, onSubmit, handleOver, handleOut }) {
  return (
    <div className="product-layout">
      <div>
        {shoes.map(shoes => (
          <ShoesItem
            key={shoes.id}
            {...shoes}
            onSubmit={onSubmit}
            handleOver={handleOver}
            handleOut={handleOut}
          />
        ))}
      </div>
    </div>
  );
}
