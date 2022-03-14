import React, { useState } from 'react';
import FilterContext from './FilterContext';

type FilterProviderProps = {
  children: React.ReactNode;
}

const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filter, setFilter] = useState<string>('all');

  const handleFilter = (filter: string): void => setFilter(filter);

  return (
    <FilterContext.Provider value={{ filter, handleFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider;
