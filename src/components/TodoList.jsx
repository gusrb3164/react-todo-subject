import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useState } from "react";
import TodoInput from "./TodoInput";
import CheckList from "./CheckList";

function TodoList({ todoList, addTodo, setTodoList, mode }){
	const [addState, setAddState] = useState(false);
	return (
		<>
			<CheckList todoList={todoList} setTodoList={setTodoList} mode={mode} />
			{
				addState &&
				<TodoInput setAddState={setAddState} addTodo={addTodo} />
			}
			{
				!addState &&
				<Fab color="primary" className="addButton" onClick={()=>{
					setAddState(!addState);
				}}>
					<Add />
				</Fab>
			}
		</>
	)
}

export default TodoList;
