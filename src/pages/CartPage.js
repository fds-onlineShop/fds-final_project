import React from 'react';

import CartContainer from '../containers/CartContainer';
import { CartProvider } from '../contexts/CartContext';
import NavBarContainer from '../containers/NavBarContainer';
import MainLayout from '../components/MainLayout';

export default class CartPage extends React.Component {
  static defaultProps = {
    title: 'SHOPPING BAG',
  };
  render() {
    return (
      <React.Fragment>
        <NavBarContainer />
        <MainLayout>
          <CartProvider>
            <h2>{this.props.title}</h2>
            <CartContainer />
          </CartProvider>
        </MainLayout>
      </React.Fragment>
    );
  }
}
