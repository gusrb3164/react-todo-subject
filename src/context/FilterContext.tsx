import { createContext } from 'react';

type FilterContextType = {
  filter: string;
  setFilter: (filter: string) => void;
};

const defaultState = {
  filter: 'all',
  setFilter: () => {},
};

const FilterContext = createContext<FilterContextType>(defaultState);

export default FilterContext;