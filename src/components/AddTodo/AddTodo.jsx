import { useState } from 'react';
import { useDispatch } from 'react-redux';

import './style.scss';
import { addTodo } from '../../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = e => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={addTodoHandler} className="">
      <input
        type="text"
        className="text-input"
        placeholder="Enter a Todo..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type="submit" className="todo-submit-btn">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
