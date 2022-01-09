import React, { useMemo } from 'react';
import { Todo } from '.';

const TodoList = ({ filter, todos, toggleComplete }) => {
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'completed':
        return todos.filter(({ completed }) => completed);

      case 'active':
        return todos.filter(({ completed }) => !completed);

      default:
        return [...todos];
    }
  }, [filter, todos]);

  return (
    <ul id="todos-list">
      {filteredTodos.map((todo, idx) => (
        <Todo key={todo.id} todo={todo} idx={idx} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
};

export default React.memo(TodoList);
