import { Checkbox, IconButton } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import { useCallback } from "react";

function CheckStuff({ todo, check, deleteTodo }){
	return (
		<div className="checkList">
			<div className="todoCheckBox">
				<Checkbox color="primary" checked={todo.completed} onClick={()=>{
					check(todo.id);
				}} />
			</div>
			<div className="todoText">
			{
				todo.completed ?
				<p style={{textDecoration:'line-through'}}>{todo.text}</p>
				:
				<p>{todo.text}</p>
			}
			</div>
			<div className="todoDate">
				<p>{todo.createAt}</p>
			</div>
			<div className="todoDelete">
				<IconButton aria-label="Delete" onClick={()=>deleteTodo(todo.id)}>
					<DeleteOutline />
				</IconButton>
			</div>
		</div>
	);
}

function CheckList({ todoList, setTodoList, mode }){
	const check = useCallback((id) => {
		setTodoList(todoList =>
			todoList.map(todo =>
				todo.id === id ? {...todo, completed: !todo.completed} : todo
			)
		);
	}, [setTodoList]);

	const deleteTodo = useCallback((id) => {
		setTodoList(todoList => todoList.filter(todo => todo.id !== id));
	}, [setTodoList]);

	return (
		<div className="todoList">
			{
				mode === 'all' &&
				todoList.map(todo => (
					<CheckStuff key={todo.id} todo={todo} check={check} deleteTodo={deleteTodo} />
				))
			}
			{
				mode === 'active' &&
				todoList.map(todo => (
					!todo.completed &&
					<CheckStuff key={todo.id} todo={todo} check={check} deleteTodo={deleteTodo} />
				))
			}
			{
				mode === 'completed' &&
				todoList.map(todo => (
					todo.completed &&
					<CheckStuff key={todo.id} todo={todo} check={check} deleteTodo={deleteTodo} />
				))
			}
		</div>
	);
}

export default CheckList;
