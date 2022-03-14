import React from 'react';
import { LabelType } from '../../types';
import getColor from '../../utils/getColor';
import { LabelListItemContainer } from './styles';

interface LabelListItemProps {
  label: LabelType
};

const LabelListItem: React.VFC<LabelListItemProps> = ({label}) => {
  return (
    <LabelListItemContainer color={getColor(false, label)}>
      {label.name as string}
    </LabelListItemContainer>
  )
}

export default LabelListItem;