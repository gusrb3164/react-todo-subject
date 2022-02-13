import React, { useState } from 'react';
import UIContext from './UIContext';
import { THEME_WHITE } from '../utils/GlobalStyle';

type UIProviderProps = {
  children: React.ReactNode;
}

function UIProvider({ children }: UIProviderProps) {
  const [filterModalVisible, setFilterModalVisible] = useState<boolean>(false);
  const [addModalVisible, setAddModalVisible] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>(THEME_WHITE);

  function handleFilterModalVisible(filterModalVisible: boolean) {
    setFilterModalVisible(filterModalVisible);
  }

  function handleAddModalVisible(addModalVisible: boolean) {
    setAddModalVisible(addModalVisible);
  }

  function handleBgColor(bgColor: string) {
    setBgColor(bgColor);
  }

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