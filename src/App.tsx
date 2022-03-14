import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import FilterProvider from './context/FilterProvider';
import TodoProvider from './context/TodoProvider';
import UIProvider from './context/UIProvider';
import './App.scss';
import { GlobalStyle } from "./utils/GlobalStyle";

const App: React.VFC = () => {
  return (
    <FilterProvider>
      <TodoProvider>
        <UIProvider>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </UIProvider>
      </TodoProvider>
    </FilterProvider>
  );
}

export default App;
