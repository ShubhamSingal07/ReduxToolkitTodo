import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <>
      <h1>ToDos</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
