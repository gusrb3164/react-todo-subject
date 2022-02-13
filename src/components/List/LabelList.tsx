import React from 'react';
import LabelListItem from './LabelListItem';
import { THEME_YELLOW, THEME_RED, THEME_BLUE } from '../../utils/GlobalStyle';
import { LabelListContainer } from './styles';

function LabelList(): JSX.Element {
  return (
    <LabelListContainer>
      <LabelListItem id={1} title="Need" color={THEME_YELLOW} />
      <LabelListItem id={2} title="Want" color={THEME_RED} />
      <LabelListItem id={3} title="Routine" color={THEME_BLUE} />
    </LabelListContainer>
  )
}

export default LabelList;