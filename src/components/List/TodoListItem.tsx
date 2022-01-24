import React from 'react';
import CheckedIcon from '../Icon/CheckedIcon';
import UnCheckedIcon from '../Icon/UnCheckedIcon';
import DeleteIcon from '../Icon/DeleteIcon';
import { TodoListItemContainer } from './styles';

type TodoListItemProps = {
  id: number;
  label: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

function TodoListItem({
  id,
  label,
  text,
  completed,
  createdAt }: TodoListItemProps): JSX.Element {
  return (
    <TodoListItemContainer
      key={id}
      completed={completed}
    >
      <div>
        {completed ? <CheckedIcon label={label}/> : <UnCheckedIcon label={label}/>}
        <div>
          <h3>{text}</h3>
          <p>{createdAt}</p>
        </div>
      </div>
      <DeleteIcon />
    </TodoListItemContainer>
  )
}

export default TodoListItem;