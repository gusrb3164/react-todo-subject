import React, { useState } from 'react';
import FilterContext from './FilterContext';

type FilterProviderProps = {
  children: React.ReactNode;
}

const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filter, setFilter] = useState<string>('all');

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider;
