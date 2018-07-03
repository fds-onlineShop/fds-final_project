import React from 'react';

import NavBarContainer from '../containers/NavBarContainer';

import ShoesListContainer from '../containers/ShoesListContainer';
import { ShoesListProvider } from '../contexts/ShoesListContext';
import MainLayout from '../components/MainLayout';

export default function ShoesPage() {
  return (
    <ShoesListProvider>
      <NavBarContainer />
      <MainLayout>
        <ShoesListContainer />
      </MainLayout>
    </ShoesListProvider>
  );
}
