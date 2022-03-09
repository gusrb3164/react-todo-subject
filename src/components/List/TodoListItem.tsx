import React, { useContext } from 'react';
import TodoContext from '../../context/TodoContext';
import CheckedIcon from '../Icon/CheckedIcon';
import UnCheckedIcon from '../Icon/UnCheckedIcon';
import DeleteIcon from '../Icon/DeleteIcon';
import { TodoType } from '../../types';
import { TodoListItemContainer } from './styles';
import UIContext from '../../context/UIContext';

function TodoListItem({
  id,
  label,
  text,
  completed,
  createdAt }: TodoType): JSX.Element {
  const { deleteTodo, updateStatus } = useContext(TodoContext);
  const { bgColor } = useContext(UIContext)

  return (
    <TodoListItemContainer
      key={id}
      completed={completed}
      bgColor={bgColor}
    >
      <div>
        <button onClick={() => updateStatus(id)}>
          {completed ? <CheckedIcon label={label}/> : <UnCheckedIcon label={label}/>}
        </button>
        <div>
          <h3>{text}</h3>
          <p>{createdAt}</p>
        </div>
      </div>
      <button onClick={() => deleteTodo(id)}>
        <DeleteIcon />
      </button>
    </TodoListItemContainer>
  )
}

export default TodoListItem;