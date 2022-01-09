import React, { useState, useCallback } from 'react';

const AddTodo = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleText = useCallback(e => {
    setInputText(e.target.value);
  }, []);

  const submit = useCallback(() => {
    if (inputText.trim().length === 0) return;
    addTodo(inputText);
    setInputText('');
  }, [inputText, addTodo]);

  return (
    <section id="todo-input">
      <input type="text" value={inputText} onChange={handleText} />
      <button onClick={submit}>Add</button>
    </section>
  );
};

export default React.memo(AddTodo);
