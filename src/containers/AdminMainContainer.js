import React from 'react';
import AdminMain from '../components/AdminMain';
import LoadingBox from '../components/LoadingBox';
import { AdminUrlConsumer } from '../contexts/AdminUrlContext';

export default class AdminMainContainer extends React.Component {
  render() {
    return (
      <AdminUrlConsumer>
        {({ loading, url }) =>
          loading ? <LoadingBox /> : <AdminMain url={url} />
        }
      </AdminUrlConsumer>
    );
  }
}
