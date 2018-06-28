import React from 'react';

import NavBarContainer from '../containers/NavBarContainer';
import MainLayout from '../components/MainLayout';
import TopListContainer from '../containers/TopListContainer';
import { TopListProvider } from '../contexts/TopListContext';

export default function TopPage() {
  return (
    <TopListProvider>
      <NavBarContainer />
      <TopListContainer />
    </TopListProvider>
  );
}
