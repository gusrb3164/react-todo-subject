import React from "react";
import { Todo } from "../App";

type TodoListProps = {
  todoList: Todo[];
};

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const { text, createdAt, completed } = todo;
  return (
    <div>
      <div>{text}</div>
      <div>{createdAt}</div>
    </div>
  );
};

const TodoList = ({ todoList }: TodoListProps) => {
  const TodoItems = todoList.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ));
  return <>{TodoItems}</>;
};

export default TodoList;
