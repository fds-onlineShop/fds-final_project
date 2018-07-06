import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import AdminProductPage from '../pages/AdminProductPage';
import AdminEditPage from '../pages/AdminEditPage';
import AdminUploadPage from '../pages/AdminUploadPage';
export default function AdminMain({ url }) {
  return (
    <div>
      <ul className="admin-menu">
        <li className="admin-menu__list">
          <NavLink className="admin-menu__item" to={`${url}/top`}>
            TOP
          </NavLink>
        </li>
        <li className="admin-menu__list">
          <NavLink className="admin-menu__item" to={`${url}/bottom`}>
            BOTTOM
          </NavLink>
        </li>
        <li className="admin-menu__list">
          <NavLink className="admin-menu__item" to={`${url}/shoes`}>
            SHOES
          </NavLink>
        </li>
        <li className="admin-menu__list">
          <NavLink className="admin-menu__item" to={`${url}/bag`}>
            BAG
          </NavLink>
        </li>
        <li className="admin-menu__list">
          <NavLink className="admin-menu__item" to={`${url}/coat`}>
            COAT
          </NavLink>
        </li>
      </ul>
      <Route path={`${url}/:productId/upload`} component={AdminUploadPage} />
      <Route path={`${url}/:productId/:id/edit`} component={AdminEditPage} />
      <Route exact path={`${url}/:productId`} component={AdminProductPage} />
      <Route
        exact
        path={url}
        render={() => <p className="admin-main__info">Select a category.</p>}
      />
    </div>
  );
}
