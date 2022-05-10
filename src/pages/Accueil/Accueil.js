import React from 'react'
import Cours from '../Formations/Cours.js';
import UnCours from '../Formations/UnCours';
import data from './AccueilData';
import { useState } from 'react';


const Accueil = ({titre}) => {
const [clicked,setClicked]=useState(false);
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
            
        <h2 className="text-left" style={{paddingTop: "2%" }}>Autres formations </h2> 
        <div className='row'>
        <div className="col"> <img width="130px" height="180px" className="monImage"  src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="autreImage"/></div>
        <div className="col"> <img width="130px" height="180px" className="monImage" src="https://media.istockphoto.com/photos/shot-of-a-young-male-engineer-using-his-laptop-in-a-server-room-picture-id1332104709?b=1&k=20&m=1332104709&s=170667a&w=0&h=cFR1hF4sXN1f0hcgesOYeoLYzPyzsV_sUEiMFmBT2O0=" alt="autreImage"/></div>
        <div className="col"> <img width="130px" height="180px" className="monImage" src="https://media.istockphoto.com/photos/businessman-trading-online-stock-market-on-teblet-screen-digital-picture-id1311598658?b=1&k=20&m=1311598658&s=170667a&w=0&h=Ln_dpeXRkCDCZjuqOe2r7AlWP29xHFbc9wyKzxajloA=" alt="autreImage"/></div>
          <div className="col"> <img width="130px" height="180px" className="monImage" src="https://media.istockphoto.com/photos/digital-transformation-concept-system-engineering-binary-code-picture-id1321462048?b=1&k=20&m=1321462048&s=170667a&w=0&h=mlDKCuG5oXoX5zeCl6ixK1MiG1Y--ZmE4N6ku0NUKOE=" alt="autreImage"/></div>
          <div className="col"> <img width="130px" height="180px" className="monImage" src="https://images.unsplash.com/photo-1573496528816-a104a722b3db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="autreImage"/></div>
          <div className="col"> <img width="130px" height="180px" className="monImage" src="https://media.istockphoto.com/photos/businessman-using-a-computer-to-document-management-concept-online-picture-id1335050732?b=1&k=20&m=1335050732&s=170667a&w=0&h=ZixERs8xGjy-XF8vYmf60sBwEwE-p3omcoffv8PWMBQ=" alt="autreImage"/></div>


        </div>
        </div>  
        </section>

      </>
      ):(<UnCours/>)
      
  )
}
export default Accueil;