import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { VscChromeClose } from "react-icons/vsc";

import { Box } from "@mui/system";

import { Todo } from "../App";

import "../styles/TodoList.css";

type TodoListProps = {
  todoList: Todo[];
  handleChangeCheckBox: (id: string) => void;
  handleDeleteTodoItem: (id: string) => void;
};

type TodoItemProps = {
  todo: Todo;
  handleChangeCheckBox: (id: string) => void;
  handleDeleteTodoItem: (id: string) => void;
};

const TodoItem = ({
  todo,
  handleChangeCheckBox,
  handleDeleteTodoItem,
}: TodoItemProps) => {
  const { id, text, createdAt, completed } = todo;
  return (
    <Box className="todoItem">
      <FormControlLabel
        control={
          <Checkbox
            color="success"
            defaultChecked={completed}
            onChange={() => handleChangeCheckBox(id)}
          />
        }
        label={text}
      />
      <div className="todoCreatedDateWrapper">
        {createdAt}
        <IconButton
          aria-label="delete"
          className="deleteIconWrapper"
          onClick={() => handleDeleteTodoItem(id)}
        >
          <VscChromeClose size={16} />
        </IconButton>
      </div>
    </Box>
  );
};

const TodoList = ({
  todoList,
  handleChangeCheckBox,
  handleDeleteTodoItem,
}: TodoListProps) => {
  const TodoItems = todoList.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      handleChangeCheckBox={handleChangeCheckBox}
      handleDeleteTodoItem={handleDeleteTodoItem}
    />
  ));
  return <>{TodoItems}</>;
};

export default TodoList;
