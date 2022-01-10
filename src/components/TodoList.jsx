import { Checkbox, Fab, Button, TextField } from "@material-ui/core";
import { Add, Delete } from "@material-ui/icons";
import { useRef, useState } from "react";

function TodoInput({ setAddState, addTodo }){
	const todoInput = useRef();

	return (
		<>
			<input type="text" ref={todoInput} />
			<Button variant="contained" onClick={()=>{
				if (todoInput.current.value !== '')
					addTodo(todoInput.current.value);
				todoInput.current.value = '';
			}}>추가</Button>
			<Button variant="contained" onClick={()=>{
				setAddState(false);
			}}>취소</Button>
		</>
	);
}

function CheckStuff({ todo, color, check }){
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
			</div>
		}
		</>
	)
}

function CheckList({ todoList, color, setTodoList }){
	let list = [];
	const check = (id) => {
		setTodoList(
			todoList.map(todo =>
				todo.id === id ? {...todo, completed: !todo.completed} : todo
			)
		);
	};
	todoList.map(todo=>{
		list.push(
			<CheckStuff todo={todo} color={color} check={check} />
		);
	});

	return (
		<div className="todoList">
			{list}
		</div>
	);
}

function TodoList({ todoList, addTodo, color, setTodoList }){
	const [addState, setAddState] = useState(false);
	return (
		<>
			<CheckList todoList={todoList} color={color} setTodoList={setTodoList} />
			{
				addState === true &&
				<>
				<TodoInput setAddState={setAddState} addTodo={addTodo} />
				</>
			}
			{
				addState === false &&
				<Fab color="primary" aria-level="add" onClick={()=>{
					setAddState(!addState);
				}}>
					<Add />
				</Fab>
			}
		</>
	)
}

export default TodoList;
