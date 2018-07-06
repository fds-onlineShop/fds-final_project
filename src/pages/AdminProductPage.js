import React from 'react';

import AdminProductContainer from '../containers/AdminProductContainer';
import { AdminProductProvider } from '../contexts/AdminProductContext';

export default function AdminProductPage({ match }) {
  const productId = match.params.productId;
  return (
    <AdminProductProvider productId={productId} key={productId}>
      <AdminProductContainer productId={productId} />
    </AdminProductProvider>
  );
}
