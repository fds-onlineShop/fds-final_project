import React from 'react';

import CoatItem from './CoatItem';

export default function CoatList({ coats, onSubmit, handleOver, handleOut }) {
  return (
    <div className="product-layout">
      <div>
        {coats.map(coat => (
          <CoatItem
            key={coat.id}
            {...coat}
            onSubmit={onSubmit}
            handleOver={handleOver}
            handleOut={handleOut}
          />
        ))}
      </div>
    </div>
  );
}
