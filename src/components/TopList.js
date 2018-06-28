import React from 'react';
import { Link } from 'react-router-dom';

import TopItem from './TopItem';

export default function TopList({ tops = [] } = {}) {
  return (
    <div>
      <div>{tops.map(top => <TopItem key={top.id} {...top} />)}</div>
    </div>
  );
}
