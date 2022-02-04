import React, { useEffect, useLayoutEffect, useContext } from 'react';
import { FilterContext } from '../../App';
import { TodoContext } from '../../App';
import TodoListItem from './TodoListItem';
import { TodoListContainer } from './styles';

type TodoType = {
  id: number,
  label: number,
  text: string,
  completed: boolean,
  createdAt: string,
}

function TodoList(): JSX.Element {
  const { filter } = useContext(FilterContext);
  const { todos, addTodo } = useContext(TodoContext);

  useLayoutEffect(() => {
    if (todos.length === 0) {
      const localTodos = localStorage.getItem('localTodos');
      if (localTodos) {
        JSON.parse(localTodos).map((item: TodoType) => (
          addTodo({
            id: item.id,
            label: item.label,
            text: item.text,
            completed: item.completed,
            createdAt: item.createdAt,
          })
        ))
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('localTodos', JSON.stringify(todos));
  }, [todos]);

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