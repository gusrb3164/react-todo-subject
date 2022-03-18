import { createContext } from 'react';
import { FilterType } from '../types';

type FilterContextType = {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
};

const defaultState = {
  filter: 'all' as FilterType,
  setFilter: () => {},
};

const FilterContext = createContext<FilterContextType>(defaultState);

export default FilterContext;