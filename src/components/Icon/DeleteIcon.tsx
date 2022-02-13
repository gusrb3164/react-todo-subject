import React from 'react';
import { THEME_LIGHT_GRAY } from '../../utils/GlobalStyle';
import { DeleteIconContainer } from './styles';

const ICON_SIZE = "24px";

function DeleteIcon(): JSX.Element {
  return (
    <DeleteIconContainer
      xmlns="http://www.w3.org/2000/svg"
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      width={ICON_SIZE}
      fill={THEME_LIGHT_GRAY}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
    </DeleteIconContainer>
  )
}

export default DeleteIcon;