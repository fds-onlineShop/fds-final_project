import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({
  username = null, // 표시할 사용자 이름
  onLogout = () => {}, // 로그아웃 버튼 클릭 시 호출할 함수
}) {
  return (
    <nav className="navbar is-primary">
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
                  <p className="control">
                    <button onClick={e => onLogout()} className="button">
                      로그아웃
                    </button>
                  </p>
                </React.Fragment>
              ) : (
                <div>
                  <Link to="/login" className="button is-primary">
                    로그인
                  </Link>
                  <Link to="/signup" className="button is-primary">
                    회원가입
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
