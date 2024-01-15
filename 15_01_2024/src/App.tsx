import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar/index.tsx"
import {routes} from "./Helpers/routes.tsx"

function App() {


  return (
    <Router>
      <Navbar/>
        <Routes>
          {routes.map((route)=>(
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
    </Router>
  )
}

export default App
