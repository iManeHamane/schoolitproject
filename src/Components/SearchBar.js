import React, { useEffect, useState }  from "react";
import { useLocation } from "react-router-dom";
import "./SearchBar.css";


const SearchBar = () => {
  const [login, setLogin] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/login') {
      setLogin(true);
    } else {
      setLogin(false);
    }
  })

  return (
      <>
    <div className={`chercher ${login && 'hidden'}`} align="right">
   
      <div className="searchInputs">

        <input
          type="text"
          placeholder="Chercher"
        />
 
      
        
      </div>
    </div>
    </>
  );
}


export default SearchBar;