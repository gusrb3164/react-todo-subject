import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

import "../styles/TodoAdder.css";

type TodoAdderProps = {
  onCreate: (todoText: string) => void;
};

const TodoAdder = ({ onCreate }: TodoAdderProps) => {
  const [todoText, setTodoText] = useState<string>("");

  const onChangeTodoText = (e: any) => {
    setTodoText(e.target.value);
  };

  return (
    <Grid container spacing={12}>
      <Grid item xs={9}>
        <TextField
          className="TodoInput"
          onChange={(e) => onChangeTodoText(e)}
          value={todoText}
          id="outlined-basic"
          label="To do"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          className="TodoAddButton"
          size="large"
          onClick={() => onCreate(todoText)}
        >
          추가
        </Button>
      </Grid>
    </Grid>
  );
};

export default TodoAdder;
