import React, { useEffect, useLayoutEffect, useContext } from 'react';
import FilterContext from '../../context/FilterContext';
import TodoContext from '../../context/TodoContext';
import TodoListItem from './TodoListItem';
import { TodoType } from '../../types';
import { TodoListContainer } from './styles';

const TodoList: React.VFC = () => {
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
  }, [todos,addTodo]);

  useEffect(() => {
    localStorage.setItem('localTodos', JSON.stringify(todos));
  }, [todos]);

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