import logo from './logo.svg';
import './App.css';
import Evento from "./components/Evento";
import Form from './components/Form';

function App() {

  return (
    <div className="App">
      <h1>Test Events</h1>
      <Evento />
      <hr />
      <Form />
    </div>
  );
}

export default App;
