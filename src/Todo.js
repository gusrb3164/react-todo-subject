import React from 'react';
import styled from 'styled-components';
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

    font-size: 24px;
    width: 24px;
    height: 24px;
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
    color: #dee2e6;
    font-size: 18px;
    cursor: pointer;
    &:hover {
        color: gray;
    }

`;

function Todo({ id, text, completed, createdAt, onRemove, onCheck }){
    return(
        <TodoBox>
            <Check completed={completed} onClick={() => onCheck(id)}>{completed && <BsCheck/>}</Check>
            <TextBox>
                <Text>{text}</Text>
                <Date>{createdAt}</Date>
            </TextBox>
            <Remove onClick={() => onRemove(id)}>
                <BsFillTrashFill />
            </Remove>
        </TodoBox>
    );
}

export default React.memo(Todo);