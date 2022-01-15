import React from 'react';
import styled, { css } from 'styled-components';
import { BsCheck, BsFillTrashFill } from 'react-icons/bs';

const TodoBox = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const Check = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 28px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 3px solid gray;
    color: gray;
    cursor: pointer;

`;

const TextBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const Text = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    color: rgb(36, 35, 35);
    font-size: 18px;

`;

const Date = styled.div`
    padding-left: 16px;
    color: gray;
    font-size: 10px;
`;

const Remove = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: lightgray;
    font-size: 18px;
    cursor: pointer;
    &:hover {
        color: gray;
    }

`;

function Todo({ id, text, completed, createdAt }){
    return(
        <TodoBox>
            <Check completed={completed}>{completed && <BsCheck/>}</Check>
            <TextBox>
                <Text>{text}</Text>
                <Date>{createdAt}</Date>
            </TextBox>
            <Remove>
                <BsFillTrashFill />
            </Remove>
        </TodoBox>
    );
}

export default Todo;