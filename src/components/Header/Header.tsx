import React, { useContext } from 'react';
import Logo from '../Logo/Logo';
import FilterIcon from '../Icon/FilterIcon';
import { HeaderContainer } from './styles';
import AddIcon from '../Icon/AddIcon';
import UIContext from '../../context/UIContext';

function Header(): JSX.Element {
  const {
    filterModalVisible,
    addModalVisible,
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
          <FilterIcon isClicked={filterModalVisible} />
        </button>
        <button className="modalButton" onClick={onClickAddIcon}>
          <AddIcon isClicked={addModalVisible} />
        </button>
      </div>
    </HeaderContainer>
  )
}

export default Header;