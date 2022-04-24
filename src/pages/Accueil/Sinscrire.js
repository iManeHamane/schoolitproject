import React, { useContext } from 'react';
import Form from '../../Components/Form/Form';
import '../../Components/Form/Input.css';
import Input from '../../Components/Form/Input';
import AuthContext from '../../Auth/AuthContext';
const Sinscrire = ({ setCreerCompte }) => {
  const {signUpUser } = useContext(AuthContext);

  return (
    <div className=' container center'>
      <h1>Inscrivez-vous !</h1>
      <form onSubmit={signUpUser}>
        <Input name='nom' label='Nom' type='text' />
        <Input name='prenom' label='Prenom' type='text' />
        <Input name='dateNaissance' label='Date de naissance' type='date' />
        <Input name='email' label='Email' type='email' />
        <Input name='password' label='Mot de passe' type='password' />
        <Input name='passwordVerification' label='Confirmez votre mot de passe' type='password' />
        <input
          type='submit'
          value='Créer un compte'
        />
        <div className='signup_link'>
          Avez-vous déjà un compte?{' '}
          <div
            onClick={() => {
              setCreerCompte(false);
            }}
          >
            {' '}
            Connectez-vous !
          </div>
        </div>
      </form>
    </div>
  );
};
export default Sinscrire;
