import React from 'react';

import CartContainer from '../containers/CartContainer';
import { CartProvider } from '../contexts/CartContext';
import NavBarMainContainer from '../containers/NavBarMainContainer';
import MainLayout from '../components/MainLayout';

export default class CartPage extends React.Component {
  static defaultProps = {
    title: 'SHOPPING BAG',
  };
  render() {
    return (
      <React.Fragment>
        <NavBarMainContainer />
        <MainLayout>
          <CartProvider>
            <h2 className="member__heading">{this.props.title}</h2>
            <CartContainer />
          </CartProvider>
        </MainLayout>
      </React.Fragment>
    );
  }
}
