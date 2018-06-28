import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import OrderHistory from './OrderHistory';

storiesOf('OrderHistory', module)
  .addDecorator(StoryRouter())
  .add('empty', () => <OrderHistory />)
  .add('with item', () => (
    <OrderHistory
      orders={[
        {
          orderName: 'asdf',
          orderAddress: 'asdf2',
          orderPhone: 'asdfas2',
          orderEmail: 'ddsf22',
          orderDate: '2018. 6. 27.',
          orderItems: [
            {
              imgurl:
                'https://cdn.glitch.com/ac31b753-58b2-44fb-8d80-06dcbe008572%2F47225431at_11_f.jpg?1529904925798',
              title: 'MAJE',
              price: '$99',
            },
            {
              imgurl:
                'https://cdn.glitch.com/ac31b753-58b2-44fb-8d80-06dcbe008572%2F47225832at_11_f.jpg?1529904933875',
              title: 'ORLEB BROWN',
              price: '$79',
            },
          ],
          orderPrice: 373,
          id: 1,
        },
      ]}
    />
  ));
