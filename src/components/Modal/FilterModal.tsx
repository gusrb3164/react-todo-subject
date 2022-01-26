import React, { useContext } from 'react';
import { FilterContext } from '../../App';
import CheckedIcon from '../Icon/CheckedIcon';
import UnCheckedIcon from '../Icon/UnCheckedIcon';
import { FilterModalContainer } from './styles';

type FilterModalProps = {
  setFilterModalVisible: (visible: boolean) => void;
}

function FilterModal({ setFilterModalVisible }: FilterModalProps) {
  const { filter, handleFilter } = useContext(FilterContext);

  return (
    <FilterModalContainer>
      <button onClick={() => handleFilter('all')}>
        {filter === 'all' ? <CheckedIcon /> : <UnCheckedIcon />}
        <p>Show All</p>
      </button>
      <button onClick={() => handleFilter('active')}>
        {filter === 'active' ? <CheckedIcon /> : <UnCheckedIcon />}
        <p>Show Active</p>
      </button>
      <button onClick={() => handleFilter('completed')}>
        {filter === 'completed' ? <CheckedIcon /> : <UnCheckedIcon />}
        <p>Show Completed</p>
      </button>
      <button onClick={() => setFilterModalVisible(false)}>
        Apply
      </button>
    </FilterModalContainer>
  )
}

export default FilterModal;