import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';

const TodoListBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 45px 20px;
    overflow-y: auto;

`;

function TodoList({ todos, onRemove, onCheck }){
    return (
        <TodoListBox>
            {todos.map(todo => (
                <Todo 
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    createdAt={todo.createdAt}
                    onRemove={onRemove} onCheck={onCheck}
                />
            ))}
        </TodoListBox>

    );
}

export default TodoList;