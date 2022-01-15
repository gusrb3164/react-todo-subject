import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';

const TodoListBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 45px 20px;
    overflow-y: auto;

`;

function TodoList(){
    return (
        <TodoListBox>
            <Todo text="프로젝트 생성하기" completed={true} createdAt="2022-01-16"/>
        </TodoListBox>

    );
}

export default TodoList;