import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../redux/Auth/authSelectors'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/register"/>
};

export default PrivateRoute;
