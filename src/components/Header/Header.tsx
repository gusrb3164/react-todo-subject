import React, { useContext } from 'react';
import Logo from '../Logo/Logo';
import FilterIcon from '../Icon/FilterIcon';
import AddIcon from '../Icon/AddIcon';
import UIContext from '../../context/UIContext';
import { HeaderContainer } from './styles';

function Header(): JSX.Element {
  const {
    handleFilterModalVisible,
    handleAddModalVisible } = useContext(UIContext);

  function onClickFilterIcon() {
    handleAddModalVisible(false);
    handleFilterModalVisible(true);
  }

  function onClickAddIcon() {
    handleFilterModalVisible(false);
    handleAddModalVisible(true);
  }
  
  return (
    <HeaderContainer>
      <Logo />
      <div>
        <button className="modalButton" onClick={onClickFilterIcon}>
          <FilterIcon />
        </button>
        <button className="modalButton" onClick={onClickAddIcon}>
          <AddIcon />
        </button>
      </div>
    </HeaderContainer>
  )
}

export default Header;