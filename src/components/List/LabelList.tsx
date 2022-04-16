import React from 'react';
import LabelListItem from './LabelListItem';
import { LabelListContainer } from './styles';

const LabelList: React.VFC = () => {
  return (
    <LabelListContainer>
      <LabelListItem label={{ id: 1, name: "Need" }} />
      <LabelListItem label={{ id: 2, name: "Want" }} />
      <LabelListItem label={{ id: 3, name: "Routine" }} />
    </LabelListContainer>
  )
}

export default LabelList;