import React, { useContext } from 'react';
import { TodoContext } from '../../App';
import CheckedIcon from '../Icon/CheckedIcon';
import UnCheckedIcon from '../Icon/UnCheckedIcon';
import DeleteIcon from '../Icon/DeleteIcon';
import { TodoListItemContainer } from './styles';

type TodoListItemProps = {
  id: number;
  label: number;
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
  const { deleteTodo, updateStatus } = useContext(TodoContext);

  return (
    <TodoListItemContainer
      key={id}
      completed={completed}
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