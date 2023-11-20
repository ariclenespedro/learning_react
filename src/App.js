/* import logo from './logo.svg'; */
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contactos from "./pages/Contactos";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/empresa' exact element={<Empresa/>}></Route>
        <Route path='/contactos' exact element={<Contactos/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
