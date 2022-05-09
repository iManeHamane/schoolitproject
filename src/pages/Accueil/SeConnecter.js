import React from 'react'
import Form from '../../Components/Form/Form';
import Sinscrire from "./Sinscrire";
import "./style.css";
import {useState} from "react";


const SeConnecter = () => {
  
  const [creerCompte,setCreerCompte]=useState(false);
  return (
    
      !creerCompte ? (
        <div className="container" >
        <Form setCreerCompte={setCreerCompte}/>
        </div>
      ):(
        <div className="container " >
        <Sinscrire setCreerCompte={setCreerCompte}/>
        </div>

      )
    
    
  
  )
}
export default SeConnecter;