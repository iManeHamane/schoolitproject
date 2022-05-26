import React, { useContext, useEffect } from 'react';
import Form from '../../Components/Form/Form';
import Sinscrire from './Sinscrire';
import './style.css';
import { useState } from 'react';
import AuthContext from '../../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const SeConnecter = () => {
  const { user } = useContext(AuthContext);
  const [creerCompte, setCreerCompte] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  });
  
  return !creerCompte ? (
    <div className='container'>
      <Form setCreerCompte={setCreerCompte} />

    </div>
  ) : (
    <div className='container '>
      <Sinscrire setCreerCompte={setCreerCompte} />
    </div>
  );
};
export default SeConnecter;
