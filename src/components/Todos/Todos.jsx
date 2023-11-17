import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
import { removeTodo } from '../../features/todo/todoSlice';

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="todos-list">
        {todos.map(todo => (
          <li className="todo-list-item" key={todo.id}>
            <div className="todo-text">{todo.text}</div>
            <button onClick={() => dispatch(removeTodo(todo.id))} className="">
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
