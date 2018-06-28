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
          orderName,
          orderAddress,
          orderPhone,
          orderEmail,
          updateName,
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
              orderName={orderName}
              orderAddress={orderAddress}
              orderPhone={orderPhone}
              orderEmail={orderEmail}
              onNameChange={updateName}
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
