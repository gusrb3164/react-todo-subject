import React, { useState } from 'react';
import FilterContext from './FilterContext';
import { FilterType } from '../types';

type FilterProviderProps = {
  children: React.ReactNode;
}

const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filter, setFilter] = useState<FilterType>('all');

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider;
