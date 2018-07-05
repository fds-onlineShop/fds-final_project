import React from 'react';

import NavBarMainContainer from '../containers/NavBarMainContainer';

import BagListContainer from '../containers/BagListContainer';
import { BagListProvider } from '../contexts/BagListContext';
import MainLayout from '../components/MainLayout';

export default function BagPage() {
  return (
    <BagListProvider>
      <NavBarMainContainer />
      <MainLayout>
        <BagListContainer />
      </MainLayout>
    </BagListProvider>
  );
}
