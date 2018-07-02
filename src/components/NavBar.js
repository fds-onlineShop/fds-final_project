import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({
  username = null, // 표시할 사용자 이름
  onLogout = () => {}, // 로그아웃 버튼 클릭 시 호출할 함수
}) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          FDS-SHOP
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/top">
            top
          </Link>
          <Link className="navbar-item" to="/bottom">
            bottom
          </Link>
          <Link className="navbar-item" to="/shoes">
            shoes
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              {username ? (
                <React.Fragment>
                  <span className="navbar-item">{username}님 환영합니다!</span>
                  {/* <p className="control"> */}
                  <Link
                    to="/main"
                    onClick={e => onLogout()}
                    className="navbar-item"
                  >
                    LOGOUT
                  </Link>
                  {/* </p> */}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Link to="/login" className="navbar-item">
                    LOGIN
                  </Link>
                  <Link to="/signup" className="navbar-item">
                    SIGNUP
                  </Link>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
