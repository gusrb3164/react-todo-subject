import React, { useContext } from 'react';
import { LogoContainer } from './styles';
import UIContext from '../../context/UIContext';

function Logo(): JSX.Element {
  const { bgColor, handleBgColor } = useContext(UIContext);
  return (
    <LogoContainer>
      <p>T</p>
      <div>
        <button />
        <input type="color" value={bgColor} onChange={(e) => handleBgColor(e.target.value)} />
      </div>
      <p>D</p>
      <p>Y</p>
    </LogoContainer>
  )
}

export default Logo;