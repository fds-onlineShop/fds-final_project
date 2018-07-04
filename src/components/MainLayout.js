import React from 'react';

export default function MainLayout(props) {
  return (
    <div className="main-layout">
      <div className="content_dummy-box" />
      <div className="layout-center">{props.children}</div>
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <div className="soc">
              <a href="https://github.com/fds-onlineShop">
                <i className="fa fa-github-alt fa-2x" aria-hidden="true" />
              </a>
            </div>
            <p>
              <strong>FDS-09</strong> by Kim Sanghyeok, Yun Dogyun, Lee Jaeyeon.
              The source code is licensed{' '}
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.{' '}
              <br />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
