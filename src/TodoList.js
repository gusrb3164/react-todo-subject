import React, { useMemo } from 'react';
import styled from 'styled-components';
import Todo from './Todo';

const TodoListBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 45px 20px;
    height: 400px;
    overflow-y: auto;

`;

function TodoList({ todos, onRemove, onCheck, btnId }){
    return (
        <TodoListBox>
            { 
                todos.map(todo => {
                    if(btnId === 'all') {
                        return (
                            <Todo 
                                key={todo.id}
                                id={todo.id}
                                text={todo.text}
                                completed={todo.completed}
                                createdAt={todo.createdAt}
                                onRemove={onRemove} 
                                onCheck={onCheck}
                            />
                        );
                    }
                    else if (btnId === 'todo') {
                        return (
                            !todo.completed &&
                                <Todo 
                                    key={todo.id}
                                    id={todo.id}
                                    text={todo.text}
                                    completed={todo.completed}
                                    createdAt={todo.createdAt}
                                    onRemove={onRemove} 
                                    onCheck={onCheck}
                                />
                        );
                    }
                    else {
                        return(
                            todo.completed &&
                                <Todo 
                                    key={todo.id}
                                    id={todo.id}
                                    text={todo.text}
                                    completed={todo.completed}
                                    createdAt={todo.createdAt}
                                    onRemove={onRemove} 
                                    onCheck={onCheck}
                                />
                        );
                    }     
                }
                )
            }
        </TodoListBox>

    );
}

export default TodoList;