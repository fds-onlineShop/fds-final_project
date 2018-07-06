import React from 'react';

import NavBarMainContainer from '../containers/NavBarMainContainer';

import ShoesPreContainer from '../containers/ShoesPreContainer';
import ShoesListContainer from '../containers/ShoesListContainer';
import { ShoesListProvider } from '../contexts/ShoesListContext';
import MainLayout from '../components/MainLayout';

export default function ShoesPage() {
  return (
    <ShoesListProvider>
      <NavBarMainContainer />
      <ShoesPreContainer />
      <MainLayout>
        <ShoesListContainer />
      </MainLayout>
    </ShoesListProvider>
  );
}
