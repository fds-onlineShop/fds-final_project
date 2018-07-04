import React from 'react';
import { Link } from 'react-router-dom';

import TopItem from './TopItem';

export default function TopList({ tops, onSubmit, handleOver, handleOut }) {
  return (
    <div>
      <div>
        {tops.map(top => (
          <TopItem
            key={top.id}
            {...top}
            onSubmit={onSubmit}
            handleOver={handleOver}
            handleOut={handleOut}
          />
        ))}
      </div>
    </div>
  );
}
