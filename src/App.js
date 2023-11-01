import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord';
import SayMayName from './components/SayMyName';

function App() {

  return (
    <div className="App">
      <HelloWord />
      <SayMayName name="<Bruno Gonsalves>" />
    </div>
  );
}

export default App;
