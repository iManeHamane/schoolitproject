import React from 'react';
import "./Bloc.css"
const Bloc=({value,i}) => {
  return (
      <>
      
    <div className="bloc"> <i className={i}></i><br></br>
    {value}</div>
      </>
     
    
  )
}
export default Bloc;