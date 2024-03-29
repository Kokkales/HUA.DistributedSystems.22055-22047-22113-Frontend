import { createBrowserHistory } from 'history';
import Layout from '../layout/Layout';
import UserProfile from '../users/UserProfile';
// import Layout from '../layout/Layout';
import React, { useEffect } from 'react';
import { Route, Redirect, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function ProfilePage(props) {
  // Retrieve the JWT token from local storage
  // const history = createBrowserHistory();
  const { userChosenRole } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('jwtToken');
  useEffect(() => {
    if (!token) {
      // history.push('/');
      navigate('/');
    }
  }, []);
  console.log('PROFILE ROLE: ' + userChosenRole);

  // recieve user role from user profile
  return (
    <Layout userRole={localStorage.getItem('userRole')}>
      <UserProfile />
    </Layout>
  );
}

export default ProfilePage;
