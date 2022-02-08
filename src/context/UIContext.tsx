import { createContext } from 'react';

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
  bgColor: '#FFFFFF',
  handleFilterModalVisible: () => {},
  handleAddModalVisible: () => {},
  handleBgColor: () => {},
};

const UIContext = createContext<UIContextType>(defaultState);

export default UIContext;