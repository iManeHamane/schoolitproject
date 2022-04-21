import React from 'react';
const Lessons = ({titre,nom}) => {
  return (
    <>
   <div> 
            <div >
                <i className="fas fa-home" ></i>   
                <h2>{titre}</h2>
                <h4>{nom}</h4> 
            </div>
    </div>
                 
    </>
    
  )
}
export default Lessons;