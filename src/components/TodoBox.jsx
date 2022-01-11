import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";

function TodoBox({ todoList, addTodo, setTodoList }){
	const [mode, setMode] = useState(
		() => JSON.parse(window.localStorage.getItem("filter")) || 'all'
	);

	const handleChange = (event, mode) => {
		setMode(mode);
	};

	useEffect(() => {
		window.localStorage.setItem("filter", JSON.stringify(mode));
	}, [mode]);

	return (
		<div className="todoBox">
			<ToggleButtonGroup
				color="secondary"
				value={mode}
				className="buttonGroup"
				exclusive
				onChange={handleChange}
				>
				<ToggleButton value="all">All</ToggleButton>
				<ToggleButton value="active">Active</ToggleButton>
				<ToggleButton value="completed">Completed</ToggleButton>
			</ToggleButtonGroup>
			<TodoList todoList={todoList} addTodo={addTodo} setTodoList={setTodoList} mode={mode} />
		</div>
	)
}

export default TodoBox;
