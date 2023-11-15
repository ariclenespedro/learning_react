/* import logo from './logo.svg'; */
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";

function App() {

  return (
    /* <div className="App"></div> */
    <Router>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/empresa"> Empresa</Link>
        </li>
        <li>
          <Link to="/contactos"> Contacto </Link>
        </li>
      </ul>


      <Routes>
        <Route path='/'>
          <Home />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
