import React from 'react';
import { TodoListContainer } from './styles';
import TodoListItem from './TodoListItem';

let data = [
  {
    id: 1,
    label: 'Want',
    text: 'Design React study subject by Figma',
    completed: true,
    createdAt: '2022.01.11 08:14',
  },
  {
    id: 2,
    label: 'Need',
    text: 'Get React study subject layout',
    completed: false,
    createdAt: '2022.01.11 08:15',
  },
];

function TodoList(): JSX.Element {
  return (
    <TodoListContainer>
      {data.map(item => (
        <TodoListItem
          key={item.id}
          id={item.id}
          label={item.label}
          text={item.text}
          completed={item.completed}
          createdAt={item.createdAt}
        />
      ))}
    </TodoListContainer>
  )
}

export default TodoList;