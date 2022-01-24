import React from 'react';
import LabelListItem from './LabelListItem';
import { LabelListContainer } from './styles';

function LabelList(): JSX.Element {
  return (
    <LabelListContainer>
      <LabelListItem title="Need" color="#F7C978" />
      <LabelListItem title="Want" color="#F68B7D" />
      <LabelListItem title="Routine" color="#A6C0FE" />
    </LabelListContainer>
  )
}

export default LabelList;