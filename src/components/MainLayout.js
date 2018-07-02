import React from 'react';

export default function MainLayout(props) {
  return (
    <div className="main-layout">
      <div className="content_dummy-box" />
      {props.children}
    </div>
  );
}
