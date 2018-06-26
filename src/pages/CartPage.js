import React from 'react';

import CartContainer from '../containers/CartContainer';
import { CartProvider } from '../contexts/CartContext';

export default class CartPage extends React.Component {
  static defaultProps = {
    title: 'SHOPPING BAG',
  };
  render() {
    return (
      <CartProvider>
        <h2>{this.props.title}</h2>
        <CartContainer />
      </CartProvider>
    );
  }
}
