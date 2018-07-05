import React from 'react';
import { Link } from 'react-router-dom';

import ShoesItem from './ShoesItem';

export default function ShoesList({ shoes, onSubmit }) {
  return (
    <div>
      <div>
        {shoes.map(shoes => (
          <ShoesItem key={shoes.id} {...shoes} onSubmit={onSubmit} />
        ))}
      </div>
    </div>
  );
}
