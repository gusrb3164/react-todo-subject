import React from 'react';
import { TodoListContainer } from './styles';
import TodoListItem from './TodoListItem';

let data = [
  {
    id: 1,
    label: 'Need',
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
  {
    id: 3,
    label: 'Want',
    text: 'Read Agile book on the way home',
    completed: false,
    createdAt: '2022.01.11 08:16',
  },
  {
    id: 4,
    label: 'Routine',
    text: 'Run 3.0km',
    completed: false,
    createdAt: '2022.01.11 10:12',
  },
  {
    id: 5,
    label: 'Routine',
    text: 'Home training lower body and upper body',
    completed: false,
    createdAt: '2022.01.11 10:13',
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