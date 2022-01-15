import dayjs from 'dayjs';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import TodoBox from './components/TodoBox';
import './App.css'
import { Card } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { debounce } from 'lodash';

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
	const [todoList, setTodoList] = useState(
		JSON.parse(window.localStorage.getItem("todo")) || []
	);

	const [color, setColor] = useState(
		JSON.parse(window.localStorage.getItem("color")) || '#ffffff'
	);

	const saveColor = useMemo(() => debounce(() => {
		window.localStorage.setItem("color", JSON.stringify(color))
	}, 500), [color]);

	useEffect(() => {
		window.localStorage.setItem("todo", JSON.stringify(todoList));
	}, [todoList]);

	useEffect(() => {
		saveColor();
	}, [color, saveColor]);

	const addTodo = useCallback((content)=>{
		const date = dayjs().format('YY-MM-DD hh:mm');
		
		const todo = {
			id: uuidv4(),
			text: content,
			createAt: date,
			completed: false
		};
		setTodoList(todoList => todoList.concat(todo));
	}, []);

	return (
		<main className="App" style={{backgroundColor: color}}>
		<Card variant="elevation" className="card">
			<div>
				<h1 style={{ float: 'left' }}>Todo Project</h1>
				<input
					type="color"
					className="colorInput"
					defaultValue={color}
					onChange={e=>{
						setColor(e.target.value);
					}}
				/>
			</div>
			<TodoBox 
				todoList={todoList}
				addTodo={addTodo}
				setTodoList={setTodoList}
			/>
		</Card>
		</main>
	);
}

export default App;
