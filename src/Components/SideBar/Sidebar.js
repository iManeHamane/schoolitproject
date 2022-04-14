import React from 'react';
import "./Sidebar.css"
const Sidebar = () => {
  return (
      <div className="navigation">
          <ul>
              <li className="list active">
                  <a href="#">
                      <span className="icon"><i className="fas fa-home"></i> </span>
                      <span className="title">
                          Accueil
                      </span>
                  </a>
              </li>
              <li className="list">
                  <a href="#">
                      <span className="icon"><i className="fas fa-home"></i> </span>
                      <span className="title">
                          Formations
                      </span>
                  </a>
              </li>
          </ul>
      </div>
   
   
  )
}
export default Sidebar;
