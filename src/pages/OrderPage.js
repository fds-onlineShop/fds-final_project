import React from 'react';
import OrderContainer from '../containers/OrderContainer';
import { OrderFormProvider } from '../contexts/OrderFormContext';

export default class OrderPage extends React.Component {
  static defaultProps = {
    title: 'CHECKOUT',
  };
  render() {
    return (
      <OrderFormProvider>
        <h2>{this.props.title}</h2>
        <OrderContainer />
      </OrderFormProvider>
    );
  }
}
