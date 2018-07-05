import React from 'react';

import NavBarContainer from '../containers/NavBarContainer';

import BagListContainer from '../containers/BagListContainer';
import { BagListProvider } from '../contexts/BagListContext';
import MainLayout from '../components/MainLayout';

export default function BagPage() {
  return (
    <BagListProvider>
      <NavBarContainer />
      <MainLayout>
        <BagListContainer />
      </MainLayout>
    </BagListProvider>
  );
}
