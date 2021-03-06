import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Formations from './pages/Formations/Formations';
import Accueil from './pages/Accueil/Accueil';
import Navbar from './Components/Navbar/Navbar';
import SeConnecter from './pages/Accueil/SeConnecter';
import PrivateRoute from './Routes/PrivateRoute';
import { AuthProvider } from './Auth/AuthContext';
import Parametres from './pages/Parametres/Parametres';
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
        <Navbar />
          <main className='whiteBackground'>
            <Routes>
              <Route path='/' element={<Accueil titre='Formations'/>} />
              <Route
                path='/formations'
                exact
               //element={<Introduction titre=" titre ici" contenu="contenu par ici"/>}
                //element={<Formations titre='Formations' />}
                element={<Parametres/>}

              />
              {/* privates */}
              <Route
                path='/vosformations'
                element={
                  <PrivateRoute>
                    <Formations titre='Vos formations' />
                  </PrivateRoute>
                }
              />
              <Route path='/login' exact element={<SeConnecter />} />
            </Routes>
          </main>
        </AuthProvider>
      </Router>
    </>
  );
}
export default App;
