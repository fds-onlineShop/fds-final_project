import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import OrderForm from './OrderForm';

storiesOf('OrderForm', module)
  .addDecorator(StoryRouter())
  .add('empty', () => <OrderForm />)
  .add('with address and items', () => (
    <OrderForm
      orderName="Jaeyeon Lee"
      orderAddress="Seoul Korea"
      orderPhone="010-1234-1234"
      orderEmail="abc@aaaa.com"
      orderItems={[
        {
          imgurl:
            'https://cdn.glitch.com/ac31b753-58b2-44fb-8d80-06dcbe008572%2F47225431at_11_f.jpg?1529904925798',
          title: 'MAJE',
          body: 'Latered corded lace and crepe de chine shirt',
          price: '$99',
        },
        {
          imgurl:
            'https://cdn.glitch.com/ac31b753-58b2-44fb-8d80-06dcbe008572%2F47225832at_11_f.jpg?1529904933875',
          title: 'ORLEB BROWN',
          body: 'Cotton-blend pique polo shirt',
          price: '$79',
        },
      ]}
    />
  ));
