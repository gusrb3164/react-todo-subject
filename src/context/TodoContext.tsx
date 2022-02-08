import { createContext } from 'react';
import { TodoType } from '../types';

type TodoContextType = {
  todos: TodoType[];
  addTodo: (todo: TodoType) => void;
  deleteTodo: (id: number) => void;
  updateStatus: (id: number) => void;
};

const defaultState = {
  todos: [
    {
      id: 0,
      label: 1,
      text: '',
      completed: false,
      createdAt: '',
    },
  ],
  addTodo: () => {},
  deleteTodo: () => {},
  updateStatus: () => {},
};

const TodoContext = createContext<TodoContextType>(defaultState);

export default TodoContext;