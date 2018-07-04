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
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={username}
                onChange={e => onUsernameChange(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                value={password}
                onChange={e => onPasswordChange(e.target.value)}
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Login</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
