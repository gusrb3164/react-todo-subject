import React, { useContext } from 'react';
import UIContext from '../../context/UIContext';
import { LabelType } from '../../types';
import { THEME_GRAY, THEME_WHITE } from '../../utils/GlobalStyle';

interface LabelButtonProps {
  label: LabelType;
  color: string;
  labelState: LabelType;
  setLabel: (label: LabelType) => void;
};

const LabelButton: React.VFC<LabelButtonProps> = ({label, color, labelState, setLabel}) => {
  const { bgColor } = useContext(UIContext);
  
  return (
    <button
      style={{
        borderColor: color,
        backgroundColor: label.name === labelState.name ? color : bgColor,
        color: label.name === labelState.name ? THEME_WHITE : THEME_GRAY
      }}
      onClick={() => setLabel(label)}
    >
      {label.name}
    </button>
  )
}

export default LabelButton;
