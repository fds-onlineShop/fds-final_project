import React from 'react';
import AdminProductList from '../components/AdminProductList';
import LoadingBox from '../components/LoadingBox';
import { AdminProductConsumer } from '../contexts/AdminProductContext';

export default class AdminProductContainer extends React.Component {
  render() {
    return (
      <AdminProductConsumer>
        {({ loading, productId, products, removeProduct }) =>
          loading ? (
            <LoadingBox />
          ) : (
            <AdminProductList
              products={products.map(product => ({
                ...product,
              }))}
              productId={productId}
              onRemoveProduct={removeProduct}
            />
          )
        }
      </AdminProductConsumer>
    );
  }
}
