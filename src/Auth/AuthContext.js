import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../Axios/Axios';
import Swal from 'sweetalert2';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [tokens, setTokens] = useState(() => {
    if (localStorage.getItem('access_token')) {
      const access_token = localStorage.getItem("access_token");
      const refresh_token = localStorage.getItem('refresh_token');
      return {access_token, refresh_token};
    } else {
      return null;
    }
  });
  const [user, setUser] = useState(() => {
    if (localStorage.getItem('access_token')) {
      const user = jwtDecode(localStorage.getItem('access_token'));
      return user;
    } else {
      return null;
    }
  }); 
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();

    const body = JSON.stringify({
      email: e.target.email.value,
      password: e.target.password.value,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios
      .post('/login', body, config)
      .then((res) => {
        setTokens(res.data);
        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);
        setUser(jwtDecode(res.data.access_token));
        navigate('/');
      })
      .catch((err) => console.log(err.message));
  };

  const logoutUser = () => {
    setUser(null);
    setTokens(null);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('login');
  };

  const signUpUser = (e) => {
    e.preventDefault();

    const body = JSON.stringify({
      nom: e.target.nom.value,
      prenom: e.target.prenom.value,
      email: e.target.email.value,
      password: e.target.password.value,
      dateNaissance: e.target.dateNaissance.value,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios
      .post('/apprenant/add', body, config)
      .then(() => {
        axios
          .post(
            '/login',
            JSON.stringify({
              email: JSON.parse(body.email),
              password: JSON.parse(body.password),
            }),
            config
          )
          .then((response) => {
            setTokens(response.data);
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('refresh_token', response.data.refresh_token);
            setUser(jwtDecode(response.data.access_token));
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => {
        Swal.fire('Erreur', err.response.data, 'error');
      });
  };

  const contextData = {
    loginUser,
    logoutUser,
    signUpUser,
    user,
    tokens,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
