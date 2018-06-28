import React from 'react';
import { Redirect } from 'react-router-dom';
import { OrderFormConsumer } from '../contexts/OrderFormContext';
import LoadingBox from '../components/LoadingBox';
import OrderForm from '../components/OrderForm';

export default class OrderContainer extends React.Component {
  render() {
    return (
      <OrderFormConsumer>
        {({
          loading,
          success,
          orderAddress,
          orderPhone,
          orderEmail,
          updateAddress,
          updatePhone,
          updateEmail,
          orderItems,
          submit,
        }) =>
          loading ? (
            <LoadingBox />
          ) : success ? (
            <Redirect to={`/orderhistory`} />
          ) : (
            <OrderForm
              orderAddress={orderAddress}
              orderPhone={orderPhone}
              orderEmail={orderEmail}
              onAddressChange={updateAddress}
              onPhoneChange={updatePhone}
              onEmailChange={updateEmail}
              orderItems={orderItems.map(orderItem => ({
                ...orderItem,
              }))}
              onSubmit={submit}
            />
          )
        }
      </OrderFormConsumer>
    );
  }
}
