import React, { useState, useContext } from 'react';
import dayjs from 'dayjs';
import TodoContext from '../../context/TodoContext';
import UIContext from '../../context/UIContext';
import { AddModalContainer } from './styles';

function AddModal(): JSX.Element {
  const [tody, setTody] = useState('');
  const [label, setLabel] = useState(0);

  const { addTodo } = useContext(TodoContext);
  const { bgColor, handleAddModalVisible } = useContext(UIContext);

  function onClickAdd() {
    if (tody.length === 0) alert('Enter your Tody!');
    else if (label === 0) alert('Select label!');
    else {
      addTodo({
        id: dayjs().valueOf(),
        label,
        text: tody,
        completed: false,
        createdAt: dayjs().format('YYYY.MM.DD HH:mm:ss'),
      });
      handleAddModalVisible(false);
    }
  }

  return (
    <AddModalContainer label={label} bgColor={bgColor}>
      <input
        type="text"
        placeholder="Enter new TODY"
        value={tody}
        onChange={(e) => setTody(e.target.value)}
      />
      <ol>
        <li>
          <button
            style={{
              borderColor: '#F7C978',
              backgroundColor: label === 1 ? '#F7C978' : bgColor,
              color: label === 1 ? '#FFFFFF' : '#696969'
            }}
            onClick={() => setLabel(1)}
          >
            Need
          </button>
        </li>
        <li>
          <button
            style={{
              borderColor: '#F68B7D',
              backgroundColor: label === 2 ? '#F68B7D' : bgColor,
              color: label === 2 ? '#FFFFFF' : '#696969'
            }}
            onClick={() => setLabel(2)}
          >
            Want
          </button>
        </li>
        <li>
          <button
            style={{
              borderColor: '#A6C0FE',
              backgroundColor: label === 3 ? '#A6C0FE' : bgColor,
              color: label === 3 ? '#FFFFFF' : '#696969'
            }}
            onClick={() => setLabel(3)}
          >
            Routine
          </button>
        </li>
      </ol>
      <button onClick={onClickAdd}>
        Add TODY!
      </button>
    </AddModalContainer>
  )
}

export default AddModal;