import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import CartList from './CartList';

storiesOf('CartList', module)
  .addDecorator(StoryRouter())
  .add('empty', () => <CartList />)
  .add('with item', () => (
    <CartList
      carts={[
        {
          id: 1,
          imgurl:
            'https://cdn.glitch.com/ac31b753-58b2-44fb-8d80-06dcbe008572%2F47225431at_11_f.jpg?1529904925798',
          title: 'MAJE',
          body: 'Latered corded lace and crepe de chine shirt',
          price: '$99',
          userId: 1,
        },
        {
          id: 2,
          imgurl:
            'https://cdn.glitch.com/ac31b753-58b2-44fb-8d80-06dcbe008572%2F47225832at_11_f.jpg?1529904933875',
          title: 'ORLEB BROWN',
          body: 'Cotton-blend pique polo shirt',
          price: '$79',
          userId: 1,
        },
      ]}
    />
  ));
