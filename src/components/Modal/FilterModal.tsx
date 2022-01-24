import React from 'react';
import CheckedIcon from '../Icon/CheckedIcon';
import UnCheckedIcon from '../Icon/UnCheckedIcon';
import { FilterModalContainer } from './styles';

type FilterModalProps = {
  setFilterModalVisible: (visible: boolean) => void;
}

function FilterModal({ setFilterModalVisible }: FilterModalProps) {
  return (
    <FilterModalContainer>
      <button>
        <CheckedIcon />
        <p>Show All</p>
      </button>
      <button>
        <UnCheckedIcon />
        <p>Show Active</p>
      </button>
      <button>
        <UnCheckedIcon />
        <p>Show Completed</p>
      </button>
      <button onClick={() => setFilterModalVisible(false)}>
        Apply
      </button>
    </FilterModalContainer>
  )
}

export default FilterModal;