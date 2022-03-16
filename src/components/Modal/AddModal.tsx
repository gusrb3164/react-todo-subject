import React, { useState, useContext } from 'react';
import dayjs from 'dayjs';
import TodoContext from '../../context/TodoContext';
import UIContext from '../../context/UIContext';
import { LabelType } from '../../types';
import { AddModalContainer } from './styles';
import { THEME_BLUE, THEME_GRAY, THEME_RED, THEME_WHITE, THEME_YELLOW } from '../../utils/GlobalStyle';

const AddModal: React.VFC = () => {
  const { addTodo } = useContext(TodoContext);
  const { bgColor, handleAddModalVisible } = useContext(UIContext);

  const [tody, setTody] = useState('');
  const [label, setLabel] = useState<LabelType>({ id: 1, name: 'Need' });

  const onClickAdd = () => {
    if (tody.length === 0) return alert('Enter your Tody!');
    addTodo({
      id: dayjs().valueOf(),
      label,
      text: tody,
      completed: false,
      createdAt: dayjs().format('YYYY.MM.DD HH:mm:ss'),
    });
    handleAddModalVisible(false);
  }

  return (
    <AddModalContainer bgColor={bgColor}>
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
              borderColor: THEME_YELLOW,
              backgroundColor: label.name === 'Need' ? THEME_YELLOW : bgColor,
              color: label.name === 'Need' ? THEME_WHITE : THEME_GRAY
            }}
            onClick={() => setLabel({ id: 1, name: 'Need' })}
          >
            Need
          </button>
        </li>
        <li>
          <button
            style={{
              borderColor: THEME_RED,
              backgroundColor: label.name === 'Want' ? THEME_RED : bgColor,
              color: label.name === 'Want' ? THEME_WHITE : THEME_GRAY
            }}
            onClick={() => setLabel({ id: 2, name: 'Want' })}
          >
            Want
          </button>
        </li>
        <li>
          <button
            style={{
              borderColor: THEME_BLUE,
              backgroundColor: label.name === 'Routine' ? THEME_BLUE : bgColor,
              color: label.name === 'Routine' ? THEME_WHITE : THEME_GRAY
            }}
            onClick={() => setLabel({ id: 3, name: 'Routine' })}
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