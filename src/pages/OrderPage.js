import React from 'react';
import OrderContainer from '../containers/OrderContainer';
import { OrderFormProvider } from '../contexts/OrderFormContext';
import NavBarMainContainer from '../containers/NavBarMainContainer';
import MainLayout from '../components/MainLayout';

export default class OrderPage extends React.Component {
  static defaultProps = {
    title: 'CHECKOUT',
  };
  render() {
    return (
      <React.Fragment>
        <NavBarMainContainer />
        <MainLayout>
          <OrderFormProvider>
            <h2 className="member__heading">{this.props.title}</h2>
            <OrderContainer />
          </OrderFormProvider>
        </MainLayout>
      </React.Fragment>
    );
  }
}
