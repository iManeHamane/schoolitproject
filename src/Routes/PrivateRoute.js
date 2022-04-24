import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const authenticated = false;
  return authenticated ? children : <Navigate to={'/login'} />
};


export default PrivateRoute;