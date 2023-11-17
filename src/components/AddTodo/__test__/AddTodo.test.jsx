import { describe, test, expect, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import AddTodo from '../AddTodo';
import { store } from '../../../app/store';

const MockAddTodo = () => (
  <Provider store={store}>
    <AddTodo />
  </Provider>
);

describe('AddTodo test', () => {
  beforeEach(() => {
    render(<MockAddTodo />);
  });

  test('Input element exists', () => {
    const inputElement = screen.getByPlaceholderText('Enter a Todo...');
    expect(inputElement).toBeDefined();
  });

  test('Input element change works', () => {
    const todoText = 'Another Todo';
    const inputElement = screen.getByPlaceholderText('Enter a Todo...');
    fireEvent.change(inputElement, { target: { value: todoText } });
    expect(inputElement.value).toEqual(todoText);
  });

  test('Add button exists', () => {
    const buttonElement = screen.getByText('Add Todo');
    expect(buttonElement).toBeDefined();
  });

  test('Input element should get cleared when add button clicked', () => {
    const inputElement = screen.getByPlaceholderText('Enter a Todo...');
    const buttonElement = screen.getByText('Add Todo');
    const todoText = 'Another Todo';
    fireEvent.change(inputElement, { target: { value: todoText } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toEqual('');
  });
});
