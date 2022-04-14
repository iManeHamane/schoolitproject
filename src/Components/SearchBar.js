import React  from "react";
import "./SearchBar.css";


const SearchBar = () => {

  return (
      <>
    <div className="chercher" align="right">
   
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