import React from 'react';

import NavBarContainer from '../containers/NavBarContainer';

import TopListContainer from '../containers/TopListContainer';
import { TopListProvider } from '../contexts/TopListContext';

export default function TopPage({ match }) {
  return (
    <TopListProvider id={match.params.id}>
      <NavBarContainer />
      <TopListContainer />
    </TopListProvider>
  );
}
