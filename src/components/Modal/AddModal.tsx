import React, { useState, useContext } from 'react';
import dayjs from 'dayjs';
import LabelButton from '../Button/LabelButton';
import TodoContext from '../../context/TodoContext';
import UIContext from '../../context/UIContext';
import { LabelType } from '../../types';
import { AddModalContainer } from './styles';
import { THEME_BLUE, THEME_RED, THEME_YELLOW } from '../../utils/GlobalStyle';

const AddModal: React.VFC = () => {
  const { bgColor, setAddModalVisible } = useContext(UIContext);
  const { addTodos } = useContext(TodoContext);

  const [todoText, setTodoText] = useState('');
  const [label, setLabel] = useState<LabelType>({ id: 1, name: 'Need' });

  const onClickAdd = () => {
    if (todoText.length === 0) return alert('Enter your Tody!');
    addTodos([{
      id: dayjs().valueOf(),
      label,
      text: todoText,
      completed: false,
      createdAt: dayjs().format('YYYY.MM.DD HH:mm:ss'),
    }])
    setAddModalVisible(false);
  }

  return (
    <AddModalContainer bgColor={bgColor}>
      <input
        type="text"
        placeholder="Enter new TODY"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <ol>
        <li>
          <LabelButton
            label={{ id: 1, name: 'Need' }}
            color={THEME_YELLOW}
            labelState={label}
            setLabel={setLabel}
          />
        </li>
        <li>
          <LabelButton
            label={{ id: 2, name: 'Want' }}
            color={THEME_RED}
            labelState={label}
            setLabel={setLabel}
          />
        </li>
        <li>
          <LabelButton
            label={{ id: 3, name: 'Routine' }}
            color={THEME_BLUE}
            labelState={label}
            setLabel={setLabel}
          />
        </li>
      </ol>
      <button onClick={onClickAdd}>
        Add TODY!
      </button>
    </AddModalContainer>
  )
}

export default AddModal;