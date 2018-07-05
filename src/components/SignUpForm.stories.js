import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import SignUpForm from './SignUpForm';

storiesOf('LoginForm', module)
  .add('empty', () => <SignUpForm />)
  .add('with texts', () => <SignUpForm username="fds" password="fds" />)
  .add('with actions', () => (
    <SignUpForm
      onUsernameChange={action('onUsernameChange')}
      onPasswordChange={action('onPasswordChange')}
      onAddressChange={action('onAddressChange')}
      onEmailChange={action('onEmailChange')}
      onPhoneChange={action('onPhoneChange')}
      onSubmit={action('onSubmit')}
    />
  ));
