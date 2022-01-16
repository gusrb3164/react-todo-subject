import React, { useState, useCallback } from 'react';
import Template from './Template.js';
import Header from './Header.js';
import TodoList from './TodoList.js';
import TodoCreate from './TodoCreate.js';

/**
 * todo interface
 * {
 *   id: string
 *   text: string
 *   completed: boolean
 *   createdAt: string
 * }
 */

function App() {
  const [todos, setTodos] = useState([{
    id: "example",
    text: "Example",
    completed: false,
    createdAt: "2022-01-01"
  }]);

  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  const onCheck = useCallback(id => {
    setTodos( todos => 
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    );
  }, []);

  return (
    <main className="App">
      <Template>
        <Header/>
        <TodoList todos={todos} onRemove={onRemove} onCheck={onCheck}/>
        <TodoCreate/>
      </Template>
      
      
    </main>
  );
}

export default App;
