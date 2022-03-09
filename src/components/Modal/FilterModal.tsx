import React, { useContext } from 'react';
import FilterContext from '../../context/FilterContext';
import UIContext from '../../context/UIContext';
import CheckedIcon from '../Icon/CheckedIcon';
import UnCheckedIcon from '../Icon/UnCheckedIcon';
import { FilterModalContainer } from './styles';

function FilterModal(): JSX.Element {
  const { filter, handleFilter } = useContext(FilterContext);
  const { bgColor, handleFilterModalVisible } = useContext(UIContext);

  return (
    <FilterModalContainer bgColor={bgColor}>
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
      <button onClick={() => handleFilterModalVisible(false)}>
        Apply
      </button>
    </FilterModalContainer>
  )
}

export default FilterModal;