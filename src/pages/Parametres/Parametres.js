import React from 'react';
import Button from './Button';
import Bloc from './Bloc';
import {useState} from "react";
import Input from "../../Components/Form/Input"
const Parametres = () => {
  const [modifier,setModifier]=useState(false);
  const [formateur,setFormateur]=useState(true);
  return (
    !modifier?(
     formateur?(
    <div >
      <br/>
      <Button value="Nom et prenom" className="purple"/>
      <Button value="Date de naissance" className="purple"/>
      <Button value="Email" className="purple"/>
      <button  className="modifier" onClick={()=>{setModifier(true)}}>Modifier</button>
      <div className='row down' >
        <div className='col-md-3'>
         <p className='margin' >Ajouter une ressource</p>
        <Bloc i="far fa-plus-square icone"></Bloc>
        </div>
        <div className='col-md-3'>
          <p className='margin'>Ajouter un cours</p>
        <Bloc i="far fa-plus-square icone"></Bloc>
        </div>
        <div className='col-md-3'>
          <p className='margin'>Ajouter une formation</p>
        <Bloc  i="far fa-plus-square icone"></Bloc>
        </div>
      </div>
      <div className="right">Voulez-vous rejoindre notre réseau d'auteur ? Contactez-nous sur <a >schoolit.formation@gmail.com</a> </div>
      

    </div>
    
    
    ):( <div >
      <br></br>
      <Button value="Nom" className="purple1"/>
      <Button value="Prenom" className="purple" />
      <Button value="Date de naissance" className="purple"/>
      <Button value="Email" className="purple"/>
      <Button value="Mot de passe" className="purple"/>
      <button  className="modifier" onClick={()=>{setModifier(true)}}>Modifier</button>
    </div>)

    
    
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
export default Parametres;