import React, { useState } from 'react';
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

  const onRemove = e => {};
  const onCheck = e => {};

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
