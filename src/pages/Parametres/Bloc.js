import React from 'react';
import "./Bloc.css"
const Bloc=({value}) => {
  return (
      <>
      
    <div className="bloc"> <i className="far fa-plus-square downdown"></i><br></br>
    {value}</div>
      </>
     
    
  )
}
export default Bloc;