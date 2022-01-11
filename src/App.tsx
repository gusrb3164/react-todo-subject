import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoAdder from "./components/TodoAdder";
import TodoList from "./components/TodoList";

//todo interface
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    const localTodoList = window.localStorage.getItem("todoList");
    if (localTodoList) {
      setTodoList(JSON.parse(localTodoList));
    }
    return () => {
      window.localStorage.setItem("todoList", JSON.stringify(todoList));
    };
  }, []);

  return (
    <main className="App">
      <Header />
      <TodoAdder todoList={todoList} />
      <TodoList todoList={todoList} />
    </main>
  );
}

export default App;
