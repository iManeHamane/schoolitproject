import React from 'react';
import Button from './Button';
import {useState} from "react";
import Input from "../../Components/Form/Input"
import Bloc from './Bloc';
const ParametreFormateur = () => {
  const [modifier,setModifier]=useState(false);
  return (
    !modifier?(
    <div >
      <br/>
      <Button value="Nom et prenom" className="purple1"/>
      <Button value="Date de naissance" className="purple"/>
      <Button value="Email" className="purple"/>
      <button  className="modifier" onClick={()=>{setModifier(true)}}>Modifier</button>
      <div className='row down' >
        <div className='col-md-3'>
        <Bloc value="  Ajouter une ressource "></Bloc>
        </div>
        <div className='col-md-3'>
        <Bloc value="Ajouter un cours"></Bloc>
        </div>
        <div className='col-md-3'>
        <Bloc value="Ajouter une formation"></Bloc>
        </div>
      </div>
      <div className="right">Voulez-vous rejoindre notre réseau d'auteur ? Contactez-nous sur schoolit.formation@gmail.com </div>
      

    </div>
  ):(
    <div >
    <form className='container'>
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
export default ParametreFormateur;