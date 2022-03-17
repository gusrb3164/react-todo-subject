import { createContext } from 'react';
import { THEME_WHITE } from '../utils/GlobalStyle';

type UIContextType = {
  filterModalVisible: boolean;
  setFilterModalVisible: (filterModalVisible: boolean) => void;
  addModalVisible: boolean;
  setAddModalVisible: (AddModalVisible: boolean) => void;
  bgColor: string;
  setBgColor: (bgColor: string) => void;
};

const defaultState = {
  filterModalVisible: false,
  setFilterModalVisible: () => {},
  addModalVisible: false,
  setAddModalVisible: () => {},
  bgColor: THEME_WHITE,
  setBgColor: () => {},
};

const UIContext = createContext<UIContextType>(defaultState);

export default UIContext;