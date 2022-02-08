import React, { useState } from 'react';
import FilterContext from './FilterContext';

type FilterProviderProps = {
  children: React.ReactNode;
}

function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilter] = useState<string>('all');

  function handleFilter(filter: string) {
    setFilter(filter);
  }

  return (
    <FilterContext.Provider value={{ filter, handleFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider;
