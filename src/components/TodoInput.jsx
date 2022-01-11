import { Button } from "@material-ui/core";
import { useRef } from "react";

function TodoInput({ setAddState, addTodo }){
	const todoInput = useRef();

	return (
		<div className="todoInput">
			<input type="text" placeholder=" ADD TODO" ref={todoInput} className="todoInputBox" />
			<Button className="todoButton" onClick={()=>{
				if (todoInput.current.value !== '')
					addTodo(todoInput.current.value);
				todoInput.current.value = '';
			}}>추가</Button>
			<Button className="todoButton" onClick={()=>{
				setAddState(false);
			}}>취소</Button>
		</div>
	);
}

export default TodoInput;
