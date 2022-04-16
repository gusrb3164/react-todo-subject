import React, { useContext } from 'react';
import UIContext from '../../context/UIContext';
import { THEME_RED, THEME_BLACK } from '../../utils/GlobalStyle';
import { AddIconContainer } from './styles';

const ICON_SIZE = "32px";

const AddIcon: React.VFC = () => {
  const { addModalVisible } = useContext(UIContext);

  return (
    <AddIconContainer
      xmlns="http://www.w3.org/2000/svg"
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      width={ICON_SIZE}
      fill={addModalVisible ? THEME_RED : THEME_BLACK}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </AddIconContainer>
  )
}

export default AddIcon;