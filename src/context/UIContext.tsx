import { createContext } from 'react';
import { THEME_WHITE } from '../utils/GlobalStyle';

type UIContextType = {
  filterModalVisible: boolean;
  addModalVisible: boolean;
  bgColor: string;
  handleFilterModalVisible: (filterModalVisible: boolean) => void;
  handleAddModalVisible: (AddModalVisible: boolean) => void;
  handleBgColor: (bgColor: string) => void;
};

const defaultState = {
  filterModalVisible: false,
  addModalVisible: false,
  bgColor: THEME_WHITE,
  handleFilterModalVisible: () => {},
  handleAddModalVisible: () => {},
  handleBgColor: () => {},
};

const UIContext = createContext<UIContextType>(defaultState);

export default UIContext;