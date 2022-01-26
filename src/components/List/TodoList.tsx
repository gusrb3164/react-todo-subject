import React, { useContext } from 'react';
import { FilterContext } from '../../App';
import { TodoContext } from '../../App';
import TodoListItem from './TodoListItem';
import { TodoListContainer } from './styles';

function TodoList(): JSX.Element {
  const { filter } = useContext(FilterContext);
  const { todos } = useContext(TodoContext);

  return (
    <TodoListContainer>
      {filter === 'all' ?
        todos.sort((a,b) => a.id - b.id).sort((a,b) => a.label - b.label).map(item => (
          <TodoListItem
            key={item.id}
            id={item.id}
            label={item.label}
            text={item.text}
            completed={item.completed}
            createdAt={item.createdAt}
          />
        )) :
        todos.filter(item => filter === 'active' ? !item.completed : item.completed).sort((a,b) => a.id - b.id).sort((a,b) => a.label - b.label).map(item => (
          <TodoListItem
            key={item.id}
            id={item.id}
            label={item.label}
            text={item.text}
            completed={item.completed}
            createdAt={item.createdAt}
          />
        ))
      }
    </TodoListContainer>
  )
}

export default TodoList;