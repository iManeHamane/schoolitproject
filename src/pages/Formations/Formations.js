import React from 'react';
import Cours from './Cours.js';
import data from './coursData';
import UnCours from './UnCours.js';
import { useState } from 'react';

const Formations = ({titre}) => {
  const[clicked,setClicked]=useState(false);
  

  return (
    !clicked ?(
    <>
    <section className="formations top" id="formations">
      <div className='container'>

        <h1 className="text-left" style={{paddingTop: "2%" }}>
          {titre}
        </h1>

        <div className="content-grid">
          <div className='row'>
          {
            data.map((val,index)=>
            {
              return (
                <div className='col-md-4'>
                  <Cours key={index} 
                         photo={val.photo} 
                         profil={val.profil} 
                         nom={val.nom} 
                         userName={val.userName} 
                         time={val.time} 
                         title={val.title}
                         setClicked={setClicked}
                  />
                </div>)
            })
          }
        </div>
        </div>
      </div>     
      </section>
    </>
    ):(<UnCours/>)
    
  )
}
export default Formations;