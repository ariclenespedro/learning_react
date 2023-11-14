/* import logo from './logo.svg'; */
import './App.css';
import NewList from './components/NewList';
import OutraLista from './components/OutraLista';

function App() {

  const listItem = ['React', 'Vue', 'Angular'];

  return (
    <div className="App">
      <h1>Renderização de Lista</h1>
      <OutraLista />
      <NewList />
    </div>
  );
}

export default App;
