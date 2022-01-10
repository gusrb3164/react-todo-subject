import dayjs from 'dayjs';
import React, { useState, useEffect, useRef } from 'react';
import TodoBox from './components/TodoBox';
import './App.css'
import { Card } from '@material-ui/core';

/**
 * todo interface
 * {
 *   id: string
 *   text: string
 *   completed: boolean
 *   createdAt: string
 * }
 */

function App() {
	console.log(dayjs())
	const [todoList, setTodoList] = useState(
	  () => JSON.parse(window.localStorage.getItem("todo")) || []
	);

	const [color, setColor] = useState(
		()=>JSON.parse(window.localStorage.getItem("color")) || '#ffffff'
	);

	useEffect(() => {
		window.localStorage.setItem("todo", JSON.stringify(todoList));
		return () => {
		console.log("re-rendered");
		}
	}, [todoList]);

	const addTodo = (content)=>{
		const date = dayjs().format('YY-MM-DD hh:mm');
		let index = 0;
		if (todoList.length !== 0)
			index = todoList[todoList.length - 1].id + 1;
		
		const todo = {
			id: index,
			text: content,
			createAt: date,
			completed: false
		};
		setTodoList(todoList.concat(todo));
	};

	return (
		<main className="App" style={{backgroundColor: color}}>
		<Card variant='outlined' className="card">
			<div>
				<h1 style={{ float: 'left' }}>Todo Project</h1>
				<input
					type="color"
					style={{ float: 'left', marginTop: 28, marginLeft: 20 }} 
					onChange={e=>{
					setColor(e.target.value);
				}} />
			</div>
			<TodoBox 
				todoList={todoList}
				addTodo={addTodo}
				color={color}
				setColor={setColor}
				setTodoList={setTodoList}
			/>
		</Card>
		</main>
	);
}

export default App;
