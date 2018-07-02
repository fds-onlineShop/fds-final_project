import React from 'react';
import OrderContainer from '../containers/OrderContainer';
import { OrderFormProvider } from '../contexts/OrderFormContext';
import NavBarContainer from '../containers/NavBarContainer';
import MainLayout from '../components/MainLayout';

export default class OrderPage extends React.Component {
  static defaultProps = {
    title: 'CHECKOUT',
  };
  render() {
    return (
      <React.Fragment>
        <NavBarContainer />
        <MainLayout>
          <OrderFormProvider>
            <h2>{this.props.title}</h2>
            <OrderContainer />
          </OrderFormProvider>
        </MainLayout>
      </React.Fragment>
    );
  }
}
