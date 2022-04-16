import React from 'react';
import getColor from '../../utils/getColor';
import { LabelType } from '../../types';
import { UnCheckedIconContainer } from './styles';

const ICON_SIZE = "48px";

interface UnCheckedIconProps {
  label?: LabelType
};

const UnCheckedIcon: React.VFC<UnCheckedIconProps> = ({label}) => {
  return (
    <UnCheckedIconContainer
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      width={ICON_SIZE}
      fill={getColor(true, label)}
    >
      <g>
        <rect fill="none" height="24" width="24"/>
      </g>
      <g>
        <path d="M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z"/>
      </g>
    </UnCheckedIconContainer>
  )
}

export default UnCheckedIcon;