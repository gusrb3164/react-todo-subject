import React, { useState, createContext } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';

type TodoType = {
  id: number,
  label: number,
  text: string,
  completed: boolean,
  createdAt: string,
}

export const FilterContext = createContext({
  filter: 'all',
  handleFilter: (filter: string): void => {},
});

export const TodoContext = createContext({
  todos: [
    {
      id: 0,
      label: 1,
      text: '',
      completed: true,
      createdAt: '',
    },
  ],
  addTodo: (todo: TodoType): void => {},
  deleteTodo: (id: number): void => {},
  updateStatus: (id: number): void => {},
});

function App(): JSX.Element {
  const [filter, setFilter] = useState<string>('all');
  const [todos, setTodos] = useState<TodoType[]>([]);

  function handleFilter(filter: string) {
    setFilter(filter);
  }

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
    <FilterContext.Provider value={{ filter, handleFilter }}>
      <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateStatus }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </TodoContext.Provider>
    </FilterContext.Provider>
  );
}

export default App;
