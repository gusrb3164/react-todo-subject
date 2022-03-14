import React, { useState } from 'react';
import UIContext from './UIContext';
import { THEME_WHITE } from '../utils/GlobalStyle';

type UIProviderProps = {
  children: React.ReactNode;
}

const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [filterModalVisible, setFilterModalVisible] = useState<boolean>(false);
  const [addModalVisible, setAddModalVisible] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>(THEME_WHITE);

  const handleFilterModalVisible = (filterModalVisible: boolean): void => setFilterModalVisible(filterModalVisible);
  const handleAddModalVisible = (addModalVisible: boolean): void => setAddModalVisible(addModalVisible);
  const handleBgColor = (bgColor: string): void => setBgColor(bgColor);

  return (
    <UIContext.Provider
      value={{
        filterModalVisible,
        addModalVisible,
        bgColor,
        handleFilterModalVisible,
        handleAddModalVisible,
        handleBgColor
      }}
    >
      {children}
    </UIContext.Provider>
  )
}

export default UIProvider;