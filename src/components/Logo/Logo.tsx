import React from 'react';
import { LogoContainer } from './styles';
//import { debounce } from 'lodash';

type LogoProps = {
  bgColor: string;
  setBgColor: (bgColor: string) => void;
}

function Logo({ bgColor, setBgColor }: LogoProps): JSX.Element {
  return (
    <LogoContainer>
      <p>T</p>
      <div>
        <button />
        <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
      </div>
      <p>D</p>
      <p>Y</p>
    </LogoContainer>
  )
}

export default Logo;