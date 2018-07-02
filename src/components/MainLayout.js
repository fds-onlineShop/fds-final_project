import React from 'react';

export default function MainLayout(props) {
  return (
    <div className="main-layout">
      <div className="content_dummy-box" />
      <div className="layout-center">{props.children}</div>
    </div>
  );
}
