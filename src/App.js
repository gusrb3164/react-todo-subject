import { useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { TodoList, AddTodo, Filter } from './components';
import './App.css';

/**
 * todo interface
 * {
 *   id: string
 *   text: string
 *   completed: boolean
 *   createdAt: string
 * }
 */

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos') || '[]'));
  const [filter, setFilter] = useState('all');
  const [backgroundColor, setBackgroundColor] = useState('#eeeeee');

  const addTodo = useCallback(
    inputText => {
      const newTodos = [...todos, { id: uuid(), text: inputText, completed: false, createdAt: new Date() }];
      localStorage.setItem('todos', JSON.stringify(newTodos));
      setTodos(newTodos);
    },
    [todos],
  );

  const toggleComplete = useCallback(
    e => {
      const todoIdx = e.target.dataset.idx;
      const newTodos = [...todos];
      newTodos.splice(todoIdx, 1, { ...todos[todoIdx], completed: !todos[todoIdx].completed });
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    },
    [todos],
  );

  const changeBackgroundColor = useCallback(e => {
    setBackgroundColor(e.target.value);
  }, []);

  const changeFilter = useCallback(e => {
    setFilter(e.target.getAttribute('data-type'));
  }, []);

  return (
    <div style={{ backgroundColor }}>
      <main className="App">
        <Filter
          filter={filter}
          changeFilter={changeFilter}
          backgroundColor={backgroundColor}
          changeBackgroundColor={changeBackgroundColor}
        />
        <TodoList filter={filter} todos={todos} toggleComplete={toggleComplete} />
        <AddTodo addTodo={addTodo} />
      </main>
    </div>
  );
}

export default App;
