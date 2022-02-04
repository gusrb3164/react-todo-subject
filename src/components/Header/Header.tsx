import React from 'react';
import Logo from '../Logo/Logo';
import FilterIcon from '../Icon/FilterIcon';
import { HeaderContainer } from './styles';
import AddIcon from '../Icon/AddIcon';

type HeaderProps = {
  bgColor: string;
  setBgColor: (bgColor: string) => void;
  filterModalVisible: boolean;
  addModalVisible: boolean;
  setFilterModalVisible: (filterModalVisible: boolean) => void;
  setAddModalVisible: (addModalVisible: boolean) => void;
}

function Header({
  bgColor,
  setBgColor,
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
      <Logo
        bgColor={bgColor}
        setBgColor={setBgColor}
      />
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