import { describe, test, expect, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import Todos from '../Todos';
import { store } from '../../../app/store';

const MockTodos = () => (
  <Provider store={store}>
    <Todos />
  </Provider>
);

describe('Todos Test', () => {
  beforeEach(() => {
    render(<MockTodos />);
  });

  test('Todo item with text Hello world exists', () => {
    const todoElement = screen.getByText('Hello world');
    expect(todoElement).toBeDefined();
  });

  test('Delete button exists in todo item', () => {
    const deleteButtonElement = screen.getByText('x');
    expect(deleteButtonElement).toBeDefined();
  });

  test('Delete button deletes todo item', () => {
    const deleteButtonElement = screen.getByText('x');
    fireEvent.click(deleteButtonElement);
    expect(screen.queryByText('Hello world')).toBeNull();
  });
});
