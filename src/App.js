import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord';
import SayMayName from './components/SayMyName';
import Pessoa from "./components/Pessoa";
import List from "./components/List";

function App() {

  return (
    <div className="App">
      <HelloWord />
      <SayMayName name="<Bruno Gonsalves>" />
      <SayMayName name="Ariclenes Pedro" />

      <hr />
      <Pessoa nome="carlos" email="carlos@gmail.com" profissao="Professor" />

      <hr/>
      <List/>
    </div>
  );
}

export default App;
