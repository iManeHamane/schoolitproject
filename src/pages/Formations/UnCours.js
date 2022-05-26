import React from 'react';
import './UnCours.css';
const UnCours = () => {
  return (
    <>

<div className="row" style={{paddingLeft: "3%"}}>

    <div className="col">

        <div >
          <h1 style={{paddingTop: "3%"}}>Course-Simple Swift App</h1><br></br>
            <div>
                <iframe className="video" width="730" height="390" src="https://www.youtube.com/embed/Xde7ns5w9LM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div>
            <img id="profile" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="profile" height="70" width="60"/>
            <div className="texte">Lesson 6 - Implement Navigation</div>
            <div className="texte2" >@prof2</div>
            <i className="like far fa-thumbs-up ">58</i>
            <i className="dislike far fa-thumbs-down ">6</i>
            <i className="fal fa-share-alt"></i>
        </div>
        <div>
            <p>
                <br></br>
                <br></br>
                In this lesson, you use navigation controllers and segues to create the navigation flow <br></br>of the FoodTracker app. At the end of the lesson, you'll have a complete navigation <br></br>scheme and interaction flow for the app.
                <br></br>
                <br></br>
            </p>
        </div>

    </div> 

    <div className="col">
      <h1  style={{paddingTop: "3%" }}>Lessons</h1>
      <div>
            <img id="profile1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPL1d8j5Er6UuAJ4Zlo0C5-DqfUmbz9fjMA&usqp=CAU" alt="icône" height="70" width="60"/>
            <button onClick="showMsg('Cours sur Custom Panel')" >
                  <div className="texte31">Custom Control</div>
            </button>
            <div className="texte41" >Lesson 4 - 11min</div>
      </div>

      <div>
            <img id="profile1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcewY_4u83OtJ-Q5LDt9GI633ZATtV6fpjLA&usqp=CAU" alt="icône" height="70" width="60"/>
            <button onClick="showMsg('Cours sur Custom Panel')" >
                  <div className="texte32">Create a Table View</div>
            </button>
            <div className="texte42" >Lesson 5 - 12min</div>
      </div>

      <div>
            <img id="profile1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuH2VDwi57RIWG0TDJQR33oG76MVLPHSvw0A&usqp=CAU" alt="icône" height="70" width="60"/>
            <button onClick="showMsg('Cours sur Custom Panel')" >
                  <div className="texte33">Implement Navigation</div>
            </button>
            <div className="texte43" >Lesson 6 - 10min</div>
      </div>

      <div>
            <img id="profile1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgriQW2ulMdSZOKfJgD2-uZqg9X2ZYvgTZ2g&usqp=CAU" alt="icône" height="70" width="60"/>
            <button onClick="showMsg('Cours sur Custom Panel')" >
                  <div className="texte35">Implement Edit</div>
            </button>
            <div className="texte45" >Lesson 7 - 8min</div>
      </div>

      <div>
            <img id="profile1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3lViPuSWPUQjGHsmbb6g0O0ACxTzOYiv_oQ&usqp=CAU" alt="icône" height="70" width="60"/>
            <button onClick="showMsg('Cours sur Custom Panel')" >
                  <div className="texte36">Persist Data</div>
            </button>
            <div className="texte46" >Lesson 8 - 12min</div>
      </div>      


    </div>

    </div>

    </>
    
  )
}
export default UnCours;