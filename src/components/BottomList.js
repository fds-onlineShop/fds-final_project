import React from 'react';
import { Link } from 'react-router-dom';

import BottomItem from './BottomItem';

export default function BottomList({
  bottoms,
  onSubmit,
  handleOver,
  handleOut,
}) {
  return (
    <div>
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
