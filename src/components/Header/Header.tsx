import React, { useContext } from 'react';
import Logo from '../Logo/Logo';
import FilterIcon from '../Icon/FilterIcon';
import AddIcon from '../Icon/AddIcon';
import UIContext from '../../context/UIContext';
import { HeaderContainer } from './styles';

const Header: React.VFC = () => {
  const { setFilterModalVisible, setAddModalVisible } = useContext(UIContext);

  const onClickFilterIcon = () => {
    setAddModalVisible(false);
    setFilterModalVisible(true);
  }

  const onClickAddIcon = () => {
    setFilterModalVisible(false);
    setAddModalVisible(true);
  }
  
  return (
    <HeaderContainer>
      <Logo />
      <div>
        <button onClick={onClickFilterIcon}>
          <FilterIcon />
        </button>
        <button onClick={onClickAddIcon}>
          <AddIcon />
        </button>
      </div>
    </HeaderContainer>
  )
}

export default Header;