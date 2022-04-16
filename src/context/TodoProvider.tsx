import React, { useState } from 'react';
import TodoContext from './TodoContext';
import { TodoType } from '../types';

type TodoProviderProps = {
  children: React.ReactNode;
}

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodos = (newTodos: TodoType[]): void => setTodos(todos => todos.concat(newTodos));
  const deleteTodo = (id: number): void => setTodos(todos => todos.filter(value => value.id !== id));
  const updateStatus = (id: number): void => {
    const todo = todos.filter(value => value.id === id)[0];
    const todoStatus = todo.completed;
    const newTodo = {...todo, completed: !todoStatus}
    setTodos(todos => todos.filter(value => value.id !== id).concat(newTodo));
  }

  return (
    <TodoContext.Provider value={{ todos, addTodos, deleteTodo, updateStatus }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider;