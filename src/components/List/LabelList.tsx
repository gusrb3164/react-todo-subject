import React from 'react';
import LabelListItem from './LabelListItem';
import { LabelListContainer } from './styles';

function LabelList(): JSX.Element {
  return (
    <LabelListContainer>
      <LabelListItem id={1} title="Need" color="#F7C978" />
      <LabelListItem id={2} title="Want" color="#F68B7D" />
      <LabelListItem id={3} title="Routine" color="#A6C0FE" />
    </LabelListContainer>
  )
}

export default LabelList;