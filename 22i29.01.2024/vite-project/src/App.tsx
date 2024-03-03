import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { routes } from './Helpers/routes';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {routes.map((route)=>(
            <Route>
              key={route.path}
              path={route.path}
              element={route.path}
            </Route>
          ))}
        </Routes>
        <Footer author="Jakub Wierzejewski" />
      </div>
    </Router>
  );
};

export default App;
