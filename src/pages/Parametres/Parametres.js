import React from 'react';
import Button from './Button';
import {useState} from "react";
import Input from "../../Components/Form/Input"
const Parametres = () => {
  const [modifier,setModifier]=useState(false);
  return (
    !modifier?(
    <div >
      
      <Button value="Nom" className="purple1"/>
      <Button value="Prenom" className="purple" />
      <Button value="Date de naissance" className="purple"/>
      <Button value="Email" className="purple"/>
      <Button value="Mot de passe" className="purple"/>
      <button  className="modifier" onClick={()=>{setModifier(true)}}>Modifier</button>

    </div>
  ):(
    <div >
    <form >
      <Input  label="Nom" type="text"/>
      <Input  label="Prenom" type="text"/>
      <Input  label="Date de naissance" type="date"/>
       <Input  label="Email" type="email"/>
        <Input label="Mot de passe" type="password"/>
        <input type="submit" value="Enregistrer les modifications" onClick={()=>{setModifier(false); }}/>
       
      </form>
      </div>
  )
  )
}
export default Parametres;