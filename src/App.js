
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Testimonial from './pages/Testimonial/Testimonial';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <Router>
    <Navbar/>
    <main>
      <Routes>
        <Route path="/"  element={<Home/>}> 
        </Route>
        <Route path="/about" exact element={<About/>}> 
        </Route> 
      </Routes>
    </main>
   </Router>
  
    
  );
}

export default App;
