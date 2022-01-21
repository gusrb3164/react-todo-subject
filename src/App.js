import React, { useState, useCallback, useEffect } from 'react';
import Template from './Template.js';
import Header from './Header.js';
import TodoList from './TodoList.js';
import TodoCreate from './TodoCreate.js';
import dayjs from 'dayjs';
import { v1 } from 'uuid'

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
  const [todos, setTodos] = useState(() => JSON.parse(window.localStorage.getItem("todos")) || []);

  useEffect(()=>{
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  const onCheck = useCallback(id => {
    setTodos( todos => 
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    );
  }, []);

  // create
  

  const onCreate = (text) => {
    const newId = v1();
    const newDate = dayjs().format("YYYY. MM. DD HH:mm");
    const newTodo = {
      id: newId,
      text: text,
      completed: false,
      createdAt: newDate
    }
    setTodos((todos) => ([...todos, newTodo]));
  };

  const [checkStatus, setCheckStatus] = useState(() => window.localStorage.getItem("filter") || "all");
  const onFilter = (btnId) => {
      setCheckStatus(btnId);
      window.localStorage.setItem("filter", btnId);
  };
  

  return (
    <main className="App">
      <Template>
        <Header checkStatus={checkStatus} onFilter={onFilter}/>
        <TodoList todos={todos} onRemove={onRemove} onCheck={onCheck} btnId={checkStatus}/>
        <TodoCreate onCreate={onCreate}/>
      </Template>
      
      
    </main>
  );
}

export default App;
