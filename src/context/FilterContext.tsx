import { createContext } from 'react';

type FilterContextType = {
  filter: string;
  handleFilter: (filter: string) => void;
};

const defaultState = {
  filter: 'all',
  handleFilter: () => {},
};

const FilterContext = createContext<FilterContextType>(defaultState);

export default FilterContext;