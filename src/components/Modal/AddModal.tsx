import React from 'react';
import { AddModalContainer } from './styles';

type AddModalProps = {
  setAddModalVisible: (visible: boolean) => void;
}

function AddModal({ setAddModalVisible }: AddModalProps) {
  return (
    <AddModalContainer>
      <input type="text" placeholder="Enter new TODY" />
      <ol>
        <li>
          <button style={{ borderColor: '#F7C978' }}>Need</button>
        </li>
        <li>
          <button style={{ borderColor: '#F68B7D' }}>Want</button>
        </li>
        <li>
          <button style={{ borderColor: '#A6C0FE' }}>Routine</button>
        </li>
      </ol>
      <button onClick={() => setAddModalVisible(false)}>
        Add TODY!
      </button>
    </AddModalContainer>
  )
}

export default AddModal;