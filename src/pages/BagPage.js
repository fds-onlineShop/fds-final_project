import React from 'react';

import NavBarMainContainer from '../containers/NavBarMainContainer';

import BagPreContainer from '../containers/BagPreContainer';
import BagListContainer from '../containers/BagListContainer';
import { BagListProvider } from '../contexts/BagListContext';
import MainLayout from '../components/MainLayout';

export default function BagPage() {
  return (
    <BagListProvider>
      <NavBarMainContainer />
      <BagPreContainer />
      <MainLayout>
        <BagListContainer />
      </MainLayout>
    </BagListProvider>
  );
}
