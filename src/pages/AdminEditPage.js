import React from 'react';
import { AdminFormProvider } from '../contexts/AdminFormContext';
import AdminFormContainer from '../containers/AdminFormContainer';

export default function AdminEditPage({ match }) {
  const productId = match.params.productId;
  const id = match.params.id;
  return (
    <AdminFormProvider productId={productId} id={id}>
      <h2 className="admin-form__heading">Edit Product</h2>
      <AdminFormContainer id={id} />
    </AdminFormProvider>
  );
}
