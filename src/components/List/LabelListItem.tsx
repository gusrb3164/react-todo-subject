import React from 'react';
import { LabelListItemContainer } from './styles';

type LabelListItemProps = {
  id: number;
  title: string;
  color: string;
}

function LabelListItem({ id, title, color }: LabelListItemProps): JSX.Element {
  return (
    <LabelListItemContainer color={color}>
      {title}
    </LabelListItemContainer>
  )
}

export default LabelListItem;