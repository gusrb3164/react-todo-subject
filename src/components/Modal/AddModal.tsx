import React, { useState, useContext } from 'react';
import { TodoContext } from '../../App';
import dayjs from 'dayjs';
import { AddModalContainer } from './styles';

type AddModalProps = {
  setAddModalVisible: (visible: boolean) => void;
}

function AddModal({ setAddModalVisible }: AddModalProps) {
  const [tody, setTody] = useState('');
  const [label, setLabel] = useState(0);

  const { addTodo } = useContext(TodoContext);

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
      })
      setAddModalVisible(false);
    }
  }

  return (
    <AddModalContainer label={label}>
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
              backgroundColor: label === 1 ? '#F7C978' : '#FFFFFF',
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
              backgroundColor: label === 2 ? '#F68B7D' : '#FFFFFF',
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
              backgroundColor: label === 3 ? '#A6C0FE' : '#FFFFFF',
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