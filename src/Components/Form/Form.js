import React from 'react';
import "./Input.css";
import Input from "./Input";
import "./Input.css";
const Form = ({setIslogged,setCreerCompte}) => {
  return (
      
    <div className="center">
      <h1>Connectez-vous !</h1>
      <form >
       <Input  label="Email" type="email"/>
        <Input label="Mot de passe" type="password"/>
        <div className="pass">Mot de passe oublié?</div>
        <input type="submit" value="Se Connecter" onClick={()=>{setIslogged(true);}}/>
        <div className="signup_link" >
          Pas de compte? <div onClick={()=>{ setCreerCompte(true); }}> Créez un !</div>
        </div>
      </form>
    </div>
   
  )
}
export default Form;
