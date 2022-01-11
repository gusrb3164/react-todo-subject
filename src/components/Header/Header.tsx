import React from 'react';
import Logo from '../Logo/Logo';
import FilterIcon from '../Icon/FilterIcon';
import { HeaderContainer } from './styles';
import AddIcon from '../Icon/AddIcon';

function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <Logo />
      <div>
        <FilterIcon />
        <AddIcon />
      </div>
    </HeaderContainer>
  )
}

export default Header;