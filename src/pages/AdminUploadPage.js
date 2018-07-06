import React from 'react';

import { AdminFormProvider } from '../contexts/AdminFormContext';
import AdminFormContainer from '../containers/AdminFormContainer';

export default function AdminUploadPage({ match }) {
  return (
    <AdminFormProvider productId={match.params.productId}>
      <h2 className="admin-form__heading">New Product</h2>
      <AdminFormContainer />
    </AdminFormProvider>
  );
}
