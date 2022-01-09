import React from 'react';
import dayjs from 'dayjs';

const Todo = ({ todo, idx, toggleComplete }) => {
  return (
    <li className="todo-item">
      <button
        className={todo.completed ? 'completed' : undefined}
        type="button"
        data-idx={idx}
        onClick={toggleComplete}
      />
      <p>{todo.completed ? <del>{todo.text}</del> : todo.text}</p>
      <time className="created-at">{dayjs(todo.createdAt).format('YY-MM-DD HH:mm')}</time>
    </li>
  );
};

export default Todo;
