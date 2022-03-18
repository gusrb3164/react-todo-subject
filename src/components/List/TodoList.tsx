import React, { useEffect, useLayoutEffect, useContext } from 'react';
import FilterContext from '../../context/FilterContext';
import TodoContext from '../../context/TodoContext';
import TodoListItem from './TodoListItem';
import { TodoType } from '../../types';
import { TodoListContainer } from './styles';

const TodoList: React.VFC = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { todos, addTodos } = useContext(TodoContext);

  useLayoutEffect(() => {
    if (todos.length !== 0) return;
    const localTodos = localStorage.getItem('localTodos');
    const localFilter = localStorage.getItem('localFilter');
    if (localTodos) {
      const formattedLocalTodos = JSON.parse(localTodos).map((item: TodoType) => ({
        id: item.id,
        label: item.label,
        text: item.text,
        completed: item.completed,
        createdAt: item.createdAt,
      }))
      addTodos(formattedLocalTodos);
    }
    if(localFilter) setFilter(localFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('localTodos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('localFilter', filter);
  }, [filter]);

  return (
    <TodoListContainer>
      {filter === 'all' ?
        todos
          .sort((a,b) => a.id - b.id)
          .sort((a,b) => a.label.id - b.label.id)
          .map(item => (
            <TodoListItem
              key={item.id}
              id={item.id}
              label={item.label}
              text={item.text}
              completed={item.completed}
              createdAt={item.createdAt}
            />
          )) :
        todos
          .filter(item => filter === 'active' ? !item.completed : item.completed)
          .sort((a,b) => a.label.id - b.label.id)
          .sort((a,b) => a.id - b.id)
          .map(item => (
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