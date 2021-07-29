import './App.css';
import Task from './Task.js';

const compromissos = ["fazer café", "dar comida para a gata", "terminar exercicios da trybe", "molhar plantas"]

function App() {
  return (
    <div className="App">
      <ul>
        { compromissos.map((item) => <Task value={item}/>) }
      </ul>
    </div>
  );
}

export default App;