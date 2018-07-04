import React from 'react';

export default class SignUpForm extends React.Component {
  static defaultProps = {
    username: '', // 아이디 입력 필드에 표시될 값
    password: '', // 암호 입력 필드에 표시될 값
    address: '',
    phone: '',
    email: '',
    onUsernameChange: username => {}, // 아이디 입력 필드에 입력이 일어날 때 호출되는 함수
    onPasswordChange: password => {}, // 암호 입력 필드에 입력이 일어날 때 호출되는 함수
    onAddressChange: address => {},
    onPhoneChange: phone => {},
    onEmailChange: email => {},
    onSubmit: () => {}, // 폼 전송이 일어날 때 호출되는 함수
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  };

  render() {
    const {
      username,
      password,
      address,
      phone,
      email,
      onUsernameChange,
      onPasswordChange,
      onAddressChange,
      onPhoneChange,
      onEmailChange,
    } = this.props;

    return (
      <React.Fragment>
        <section className="hero is-success is-fullheight login-form_layout">
          <div className="hero-body login-form">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                <h3 className="title has-text-grey">Sign Up</h3>
                <div className="box">
                  <figure className="avatar">
                    <img
                      alt="loginImg"
                      src="https://www.shareicon.net/data/128x128/2016/04/07/746062_multimedia_512x512.png"
                    />
                  </figure>
                  <form onSubmit={this.handleSubmit}>
                    <div className="field">
                      <label className="label">Username</label>
                      <div className="control">
                        <input
                          className="input "
                          type="text"
                          autoFocus=""
                          value={username}
                          onChange={e => onUsernameChange(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Password</label>
                      <div className="control">
                        <input
                          className="input "
                          type="password"
                          value={password}
                          onChange={e => onPasswordChange(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Address</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          value={address}
                          onChange={e => onAddressChange(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Phone</label>
                      <div className="control">
                        <input
                          className="input"
                          type="tel"
                          value={phone}
                          onChange={e => onPhoneChange(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">E-mail</label>
                      <div className="control">
                        <input
                          className="input"
                          type="email"
                          value={email}
                          onChange={e => onEmailChange(e.target.value)}
                        />
                      </div>
                    </div>

                    <button className="button is-block is-info is-large is-fullwidth">
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
