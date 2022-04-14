import React from 'react'
import Form from '../../Components/Form/Form';
import Sinscrire from "./Sinscrire";

import "./style.css";
import {useState} from "react";

const SeConnecter = ({setIslogged, setHaveAnAccount}) => {
  const [creerCompte,setCreerCompte]=useState(false);
  return (
    
      !creerCompte ? (
        <div className="container" >
        <Form setIslogged={setIslogged}  setHaveAnAccount ={setHaveAnAccount} setCreerCompte={setCreerCompte}/>
        </div>
      ):(
        <div className="container " >
        <Sinscrire setIslogged={setIslogged} setHaveAnAccount={setHaveAnAccount}  setCreerCompte={setCreerCompte}/>
        </div>

      )
    
    
  
  )
}
export default SeConnecter;