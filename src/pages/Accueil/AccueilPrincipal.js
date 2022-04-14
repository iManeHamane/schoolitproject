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
import Sidebar from '../../Components/SideBar/Sidebar';
import SearchBar from '../../Components/SearchBar';
const AccueilPrincipal = ({haveAnAccount,setHaveAnAccount,setIslogged}) => {

  return (
    
    <>
    {
   
  
   /*</>Au cas ou vous trouvez la side bar malfaite ou difficile
   à intégrer vous pouvez enlever le <Sidebar/> et le remplacer par :
   
   */ !haveAnAccount? (<Router>
     
    <NavBarP  setHaveAnAccount={setHaveAnAccount}/> 
    <SearchBar/>     
    <main>
      <Routes>
        <Route path="/"  element={<Accueil titre="Formations les plus suivies" />}> 
        </Route>
        <Route path="/formations" exact element={<Formations  />}> 
        </Route>
      </Routes>
    </main>
   </Router> ):(<div >
    
     <SeConnecter setIslogged={setIslogged} setHaveAnAccount={setHaveAnAccount}/></div>)}
  
  </>
  )
}
export default AccueilPrincipal;