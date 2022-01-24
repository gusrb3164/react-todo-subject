import React from 'react';
import { LabelListItemContainer } from './styles';

type LabelListItemProps = {
  title: string;
  color: string;
}

function LabelListItem({ title, color }: LabelListItemProps): JSX.Element {
  return (
    <LabelListItemContainer color={color}>
      {title}
    </LabelListItemContainer>
  )
}

export default LabelListItem;