import React from 'react';

import { AuthConsumer } from '../contexts/AuthContext';
import NavBarMain from '../components/NavBarMain';
import { Link, Redirect } from 'react-router-dom';

export default class NavBarContainer extends React.Component {
  state = {
    loggedOut: false,
  };
  render() {
    const { loggedOut } = this.state;
    if (loggedOut) return <Redirect to="/" />;
    return (
      <AuthConsumer>
        {({ username, logout }) => (
          <NavBarMain
            username={username}
            brandAs={Link}
            brandProps={{ to: '/' }}
            loginAs={Link}
            loginProps={{ to: '/login' }}
            onLogout={() => {
              logout();
              this.setState({ loggedOut: true });
            }}
          />
        )}
      </AuthConsumer>
    );
  }
}
