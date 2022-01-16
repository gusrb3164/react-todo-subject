import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

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
  const [todoList, setTodoList] = useState<Todo[]>(() =>
    JSON.parse(window.localStorage.getItem("todoList") || "[]")
  );

  const saveTodoListInLocalStorage = () => {
    window.localStorage.setItem("todoList", JSON.stringify(todoList));
  };

  useEffect(() => {
    saveTodoListInLocalStorage();
  }, [todoList]);

  const onCreateTodoItem = (todoText: string) => {
    const now = dayjs();
    const newTodo: Todo = {
      id: uuidv4(),
      text: todoText,
      completed: false,
      createdAt: now.format("YYYY-MM-DD HH:mm:ss"),
    };
    setTodoList([...todoList, newTodo]);
  };

  const handleChangeTodoState = (id: string) => {
    const indexToUpdate = todoList.findIndex((todo) => todo.id === id);
    const newTodoList = todoList;
    newTodoList[indexToUpdate].completed =
      !newTodoList[indexToUpdate].completed;
    setTodoList(newTodoList);
    saveTodoListInLocalStorage(); // 문제: useEffect에서 감지 안 됨
  };

  const handleDeleteTodoItem = (id: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <main className="App">
      <Header />
      <TodoAdder onCreate={onCreateTodoItem} />
      <TodoList
        todoList={todoList}
        handleChangeCheckBox={handleChangeTodoState}
        handleDeleteTodoItem={handleDeleteTodoItem}
      />
    </main>
  );
}

export default App;
