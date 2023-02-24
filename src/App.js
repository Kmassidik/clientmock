import './App.css';
import {Counter} from './Features/Counter/counter'
import {NameChanger} from './Features/NameChanger/name'
import { Login } from "./Pages";
import ToDoList from './Pages/ToDoList';
function App() {
  return (
    <div className="App">
      <div>
        <Counter/>
      </div>
      <div>
        <NameChanger/>
      </div>
      <div>
        <Login/>
      </div>
      <div>
        <ToDoList/>
      </div>
    </div>
  );
}

export default App;
