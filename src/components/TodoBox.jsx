import { ButtonGroup, Button } from "@material-ui/core";
import TodoList from "./TodoList";

function TodoBox({ todoList, addTodo, color, setColor, setTodoList }){
	return (
		<div>
			<ButtonGroup variant="outlined">
				<Button>All</Button>
				<Button>Active</Button>
				<Button>Completed</Button>
			</ButtonGroup>
			<TodoList todoList={todoList} addTodo={addTodo} color={color} setTodoList={setTodoList} />
		</div>
	)
}

export default TodoBox;
