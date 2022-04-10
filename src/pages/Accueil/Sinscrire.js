import React from 'react'
import Form from '../../Components/Form/Form'
import "../../Components/Form/Input.css";
import Input from "../../Components/Form/Input";
const Sinscrire = ({setIslogged, setHaveAnAccount,setCreerCompte}) => {
  return (
    <div className="container">
  
  <div className="centerH">
      <h1>Inscrivez-vous !</h1>
      <form >
      <Input  label="Nom" type="text"/>
      <Input  label="Preom" type="text"/>
      <Input  label="Date de naissance" type="date"/>
       <Input  label="Email" type="email"/>
        <Input label="Mot de passe" type="password"/>
        <Input label="Confirmez votre mot de passe" type="password"/>
        <input type="submit" value="Créer un compte" onClick={()=>{setIslogged(true); }}/>
        <div className="signup_link" >
          Avez-vous déjà un compte? Connectez-vous en ! <a onClick={()=>{ setCreerCompte(false);}}>Se connecter</a>
        </div>
      </form>
    </div>
    
  </div>
  )
}
export default Sinscrire;