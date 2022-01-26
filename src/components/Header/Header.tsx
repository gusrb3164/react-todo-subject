import React from 'react';
import Logo from '../Logo/Logo';
import FilterIcon from '../Icon/FilterIcon';
import { HeaderContainer } from './styles';
import AddIcon from '../Icon/AddIcon';

type HeaderProps = {
  filterModalVisible: boolean;
  addModalVisible: boolean;
  setFilterModalVisible: (filterModalVisible: boolean) => void;
  setAddModalVisible: (addModalVisible: boolean) => void;
}

function Header({
  filterModalVisible,
  addModalVisible,
  setFilterModalVisible,
  setAddModalVisible }: HeaderProps): JSX.Element {
  function onClickFilterIcon() {
    setAddModalVisible(false);
    setFilterModalVisible(true);
  }
  function onClickAddIcon() {
    setFilterModalVisible(false);
    setAddModalVisible(true);
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