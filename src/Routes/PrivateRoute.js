import { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../Auth/AuthContext';

const PrivateRoute = ({ children }) => {
  const authenticated = useContext(AuthContext).user;
  return authenticated ? children : <Navigate to={'/login'} />
};


export default PrivateRoute;