import React from 'react';
import superAPI from '../superAPI';
import AdminMainPage from './AdminMainPage';
import { Redirect } from 'react-router-dom';

export default function AdminAuthPage({ match }) {
  const AdminControl = async () => {
    const res = await superAPI.get(`/me`);
    console.log(res.data.id);
    if (res.data.id === '1') {
      return <AdminMainPage match={match} />;
    } else {
      return <Redirect to="/main" />;
    }
  };
  return AdminControl();
}
