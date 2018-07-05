import React from 'react';
import { CartConsumer } from '../contexts/CartContext';
import LoadingBox from '../components/LoadingBox';
import CartList from '../components/CartList';

export default class CartContainer extends React.Component {
  render() {
    return (
      <CartConsumer>
        {({ loading, carts, removeCartItem }) =>
          loading ? (
            <LoadingBox />
          ) : (
            <CartList
              carts={carts.map(cart => ({
                ...cart,
              }))}
              onRemoveCartItem={removeCartItem}
            />
          )
        }
      </CartConsumer>
    );
  }
}
