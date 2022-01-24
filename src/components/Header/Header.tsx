import React from 'react';
import Logo from '../Logo/Logo';
import FilterIcon from '../Icon/FilterIcon';
import { HeaderContainer } from './styles';
import AddIcon from '../Icon/AddIcon';

type HeaderProps = {
  setFilterModalVisible: (filterModalVisible: boolean) => void;
  setAddModalVisible: (addModalVisible: boolean) => void;
}

function Header({ setFilterModalVisible, setAddModalVisible }: HeaderProps): JSX.Element {
  return (
    <HeaderContainer>
      <Logo />
      <div>
        <button
          className="modalButton"
          onClick={() => setFilterModalVisible(true)}>
          <FilterIcon />
        </button>
        <button className="modalButton" onClick={() => setAddModalVisible(true)}>
          <AddIcon />
        </button>
      </div>
    </HeaderContainer>
  )
}

export default Header;