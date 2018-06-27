import React from 'react';
import { OrderFormConsumer } from '../contexts/OrderFormContext';
import LoadingBox from '../components/LoadingBox';
import OrderForm from '../components/OrderForm';

export default class CartContainer extends React.Component {
  render() {
    return (
      <OrderFormConsumer>
        {({
          loading,
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
