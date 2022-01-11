import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
