import React, { useState, useCallback } from 'react';
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
  const [todos, setTodos] = useState([{
    id: "example",
    text: "Example",
    completed: false,
    createdAt: "2022. 01. 01 00:00"
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

  // create
  const [input, setInput] = useState("");
  const onChange = useCallback(
    e => {
      const value = e.target.value;
      setInput(value);
    }, 
  []);

  const onCreate = () => {
    const newId = v1();
    const newDate = dayjs().format("YYYY. MM. DD HH:mm");
    const newTodo = {
      id: newId,
      text: input,
      completed: false,
      createdAt: newDate
    }

    setTodos((todos) => ([...todos, newTodo]));
    console.log(todos);
    setInput("");
  };

  return (
    <main className="App">
      <Template>
        <Header/>
        <TodoList todos={todos} onRemove={onRemove} onCheck={onCheck}/>
        <TodoCreate text={input} onChange={onChange} onCreate={onCreate}/>
      </Template>
      
      
    </main>
  );
}

export default App;
