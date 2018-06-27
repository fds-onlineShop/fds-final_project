import React from 'react';
import { Redirect } from 'react-router-dom';

import SignUpForm from '../components/SignUpForm';
import { AuthConsumer } from '../contexts/AuthContext';

export default class SignUpFormContainer extends React.Component {
  state = {
    success: false,
    username: '',
    password: '',
    address: '',
    phone: '',
    email: '',
  };

  updateUsername = username => this.setState({ username });
  updatePassword = password => this.setState({ password });
  updateAddress = address => this.setState({ address });
  updatePhone = phone => this.setState({ phone });
  updateEmail = email => this.setState({ email });

  render() {
    const { success, username, password, address, phone, email } = this.state;
    if (success) return <Redirect to="/main" />;
    return (
      <AuthConsumer>
        {({ signup }) => (
          <SignUpForm
            username={username}
            password={password}
            address={address}
            phone={phone}
            email={email}
            onUsernameChange={this.updateUsername}
            onPasswordChange={this.updatePassword}
            onAddressChange={this.updateAddress}
            onPhoneChange={this.updatePhone}
            onEmailChange={this.updateEmail}
            onSubmit={async () => {
              try {
                await signup(username, password, address, phone, email);
                this.setState({ success: true });
              } catch (e) {
                if (e.response && e.response.status === 400) {
                  alert('사용자 이름 혹은 비밀번호가 잘못되었습니다.');
                  this.setState({
                    username: '',
                    password: '',
                  });
                } else {
                  alert(
                    '네트워크 에러가 발생했습니다. 잠시 후 다시 시도해주세요.'
                  );
                }
              }
            }}
          />
        )}
      </AuthConsumer>
    );
  }
}
