import React, { useContext } from 'react';
import FilterContext from '../../context/FilterContext';
import UIContext from '../../context/UIContext';
import CheckedIcon from '../Icon/CheckedIcon';
import UnCheckedIcon from '../Icon/UnCheckedIcon';
import { FilterModalContainer } from './styles';

const FilterModal: React.VFC = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { bgColor, setFilterModalVisible } = useContext(UIContext);

  return (
    <FilterModalContainer bgColor={bgColor}>
      <button onClick={() => setFilter('all')}>
        {filter === 'all' ? <CheckedIcon /> : <UnCheckedIcon />}
        <p>Show All</p>
      </button>
      <button onClick={() => setFilter('active')}>
        {filter === 'active' ? <CheckedIcon /> : <UnCheckedIcon />}
        <p>Show Active</p>
      </button>
      <button onClick={() => setFilter('completed')}>
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