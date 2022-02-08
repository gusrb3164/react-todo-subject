import React, { useState } from 'react';
import TodoContext from './TodoContext';
import { TodoType } from '../types';

type TodoProviderProps = {
  children: React.ReactNode;
}

function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<TodoType[]>([]);

  function addTodo(todo: TodoType) {
    setTodos(todos => todos.concat(todo));
  }
  
  function deleteTodo(id: number) {
    setTodos(todos => todos.filter(value => value.id !== id));
  }

  function updateStatus(id: number) {
    const todo = todos.filter(value => value.id === id)[0];
    const todoStatus = todo.completed;
    const newTodo = {...todo, completed: !todoStatus}
    setTodos(todos => todos.filter(value => value.id !== id).concat(newTodo));
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateStatus }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider;