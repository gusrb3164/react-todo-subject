import { createContext } from 'react';
import { LabelType, TodoType } from '../types';

type TodoContextType = {
  todos: TodoType[];
  addTodos: (todos: TodoType[]) => void;
  deleteTodo: (id: number) => void;
  updateStatus: (id: number) => void;
};

const defaultState = {
  todos: [
    {
      id: 0,
      label: {
        id: 1,
        name: 'Need'
      } as LabelType,
      text: '',
      completed: false,
      createdAt: '',
    },
  ],
  addTodos: () => {},
  deleteTodo: () => {},
  updateStatus: () => {},
};

const TodoContext = createContext<TodoContextType>(defaultState);

export default TodoContext;