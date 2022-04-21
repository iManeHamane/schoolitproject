import React from 'react';
import NavBarP from '../../Components/Navbar/NavBarP';
import SeConnecter from './SeConnecter';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Formations from '../Formations/Formations';
import Accueil from './Accueil';
import SearchBar from '../../Components/SearchBar';
const AccueilPrincipal = ({haveAnAccount,setHaveAnAccount,setIslogged}) => {

  return (
    
    <>
    {
    !haveAnAccount? (<Router>
     
    <NavBarP  setHaveAnAccount={setHaveAnAccount}/> 
    <SearchBar/>     
    <main>
      <Routes>
        <Route path="/"  element={<Accueil titre="Formations les plus suivies" />}/> 
        <Route path="/formations" exact element={<Formations  />}/>     
      </Routes>
    </main>
   </Router> ):(<div >
     <Router>
     <Routes>
    <Route path="/login" exact element={<SeConnecter setIslogged={setIslogged} setHaveAnAccount={setHaveAnAccount}/>}/> 
     </Routes>
     </Router>
     </div>)
     }

  
  </>
  )
}
export default AccueilPrincipal;