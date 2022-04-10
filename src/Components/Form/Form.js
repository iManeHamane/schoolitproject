import React from 'react';
import "./Input.css";
import Input from "./Input";
import "./Input.css";
const Form = ({setIslogged,setCreerCompte,setHaveAnAccount}) => {
  return (
      
    <div className="center">
      <h1>Connectez-vous !</h1>
      <form >
       <Input  label="Email" type="email"/>
        <Input label="Mot de passe" type="password"/>
        <div className="pass">Mot de passe oublié?</div>
        
        <input type="submit" value="Se Connecter" onClick={()=>{setIslogged(true);}}/>
        <div className="signup_link" >
          Pas de compte? Créez-en un ! <a onClick={()=>{ setCreerCompte(true);}}>S'inscrire</a>
        </div>
      </form>
    </div>
   
  )
}
export default Form;
