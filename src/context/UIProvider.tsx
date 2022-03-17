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

  return (
    <UIContext.Provider
      value={{
        filterModalVisible,
        setFilterModalVisible,
        addModalVisible,
        setAddModalVisible,
        bgColor,
        setBgColor
      }}
    >
      {children}
    </UIContext.Provider>
  )
}

export default UIProvider;