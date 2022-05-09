import React, { useContext } from 'react';
import './Input.css';
import Input from './Input';
import './Input.css';
import AuthContext from '../../Auth/AuthContext';
const Form = ({ setCreerCompte }) => {
  const { loginUser } = useContext(AuthContext);
  
  return (
    <div className='center'>
      <h1>Connectez-vous !</h1>
      <form onSubmit={loginUser}>
        <Input name='email' label='Email' type='email' />
        <Input name='password' label='Mot de passe' type='password' />
        <div className='pass'>Mot de passe oublié?</div>
        <input type='submit' value='Se Connecter' onClick={() => {}} />
        <div className='signup_link'>
          Pas de compte?{' '}
          <div
            onClick={() => {
              setCreerCompte(true);
            }}
          >
            {' '}
            Créez un !
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
