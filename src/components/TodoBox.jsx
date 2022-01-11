import { ButtonGroup, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";

function TodoBox({ todoList, addTodo, setTodoList }){
	const [mode, setMode] = useState(
		() => JSON.parse(window.localStorage.getItem("filter")) || 'all'
	);

	useEffect(() => {
		window.localStorage.setItem("filter", JSON.stringify(mode));
	}, [mode]);

	return (
		<div className="todoBox">
			<ButtonGroup variant="outlined" className="buttonGroup">
				<Button onClick={()=>setMode('all')}>All</Button>
				<Button onClick={()=>setMode('active')}>Active</Button>
				<Button onClick={()=>setMode('completed')}>Completed</Button>
			</ButtonGroup>
			<TodoList todoList={todoList} addTodo={addTodo} setTodoList={setTodoList} mode={mode} />
		</div>
	)
}

export default TodoBox;
