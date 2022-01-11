import React from "react";
import { Todo } from "../App";

type TodoListProps = {
  todoList: Todo[];
};

const TodoList = ({ todoList }: TodoListProps) => {
  return <div>TodoList</div>;
};

export default TodoList;
