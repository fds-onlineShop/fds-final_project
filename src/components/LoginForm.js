import React from 'react';

export default class LoginForm extends React.Component {
  static defaultProps = {
    username: '', // 아이디 입력 필드에 표시될 값
    password: '', // 암호 입력 필드에 표시될 값
    onUsernameChange: username => {}, // 아이디 입력 필드에 입력이 일어날 때 호출되는 함수
    onPasswordChange: password => {}, // 암호 입력 필드에 입력이 일어날 때 호출되는 함수
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
      onUsernameChange,
      onPasswordChange,
    } = this.props;

    return (
      <div className="layout-center">
        <section className="hero is-success is-fullheight login-form_layout">
          <div className="hero-body login-form">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                <h3 className="title has-text-grey">Login</h3>
                <div className="box">
                  <figure className="avatar">
                    <img
                      alt="loginImg"
                      src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-128.png"
                    />
                  </figure>
                  <form onSubmit={this.handleSubmit}>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-large"
                          type="text"
                          placeholder="Your Username"
                          autoFocus=""
                          value={username}
                          onChange={e => onUsernameChange(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-large"
                          type="password"
                          placeholder="Your Password"
                          value={password}
                          onChange={e => onPasswordChange(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="checkbox">
                        <input type="checkbox" />
                        Remember me
                      </label>
                    </div>
                    <button className="button is-block is-info is-large is-fullwidth">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
