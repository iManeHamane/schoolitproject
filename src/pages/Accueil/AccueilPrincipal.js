import React from 'react';
import NavBarP from '../../Components/Navbar/NavBarP';
import SeConnecter from './SeConnecter';
import Sinscrire from './Sinscrire';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Formations from '../Formations/Formations';
import Accueil from './Accueil';
import Parametres from '../Parametres/Parametres';
import {useState} from "react";
const AccueilPrincipal = ({haveAnAccount,setHaveAnAccount,setIslogged}) => {
  console.log(haveAnAccount);
  return (
    
    <>
    {!haveAnAccount?( 
   
  <Router>
    <NavBarP  setHaveAnAccount={setHaveAnAccount}/>
    <main>
      <Routes>
        <Route path="/"  element={<Accueil/>}> 
        </Route>
        <Route path="/formations" exact element={<Formations/>}> 
        </Route>
      </Routes>
    </main>
   </Router> ):(<div><SeConnecter setIslogged={setIslogged} setHaveAnAccount={setHaveAnAccount}/></div>)}
  
   </>
  )
}
export default AccueilPrincipal;