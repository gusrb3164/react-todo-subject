import { Checkbox, IconButton } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import { useCallback } from "react";

function CheckStuff({ todo, check, deleteTodo }){
	return (
		<>
		{
			todo.completed === true ?
			<div className="checkList">
				<div className="todoCheckBox">
					<Checkbox color="primary" checked={todo.completed} onClick={()=>{
						check(todo.id);
					}} />
				</div>
				<div className="todoText">
					<p style={{textDecoration:'line-through'}}>{todo.text}</p>
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
			:
			<div className="checkList">
				<div className="todoCheckBox">
					<Checkbox color="primary" checked={todo.completed} onClick={()=>{
						check(todo.id);
					}} />
				</div>
				<div className="todoText">
					<p>{todo.text}</p>
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
		}
		</>
	)
}

function CheckList({ todoList, setTodoList, mode }){
	let list = [];

	const check = useCallback((id) => {
		setTodoList(
			todoList.map(todo =>
				todo.id === id ? {...todo, completed: !todo.completed} : todo
			)
		);
	}, [todoList, setTodoList]);

	const deleteTodo = useCallback((id) => {
		setTodoList(todoList.filter(todo => todo.id !== id));
	}, [todoList, setTodoList]);

	if (mode === 'all')
	{
		todoList.forEach(todo=>{
			list.push(
				<CheckStuff key={todo.id} todo={todo} check={check} deleteTodo={deleteTodo} />
			);
		});
	} else if (mode === 'active') {
		todoList.forEach(todo=>{
			if (todo.completed === false) {
				list.push(
					<CheckStuff key={todo.id} todo={todo} check={check} deleteTodo={deleteTodo} />
				);
			}
		});
	} else {
		todoList.forEach(todo=>{
			if (todo.completed === true) {
				list.push(
					<CheckStuff key={todo.id} todo={todo} check={check} deleteTodo={deleteTodo} />
				);
			}
		});
	}

	return (
		<div className="todoList">
			{list}
		</div>
	);
}

export default CheckList;
