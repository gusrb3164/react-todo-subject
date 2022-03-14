import React, { useContext, useEffect, useMemo, useState } from 'react';
import { LogoContainer } from './styles';
import UIContext from '../../context/UIContext';
import { debounce } from 'lodash';

const Logo: React.VFC = () => {
  const { bgColor, handleBgColor } = useContext(UIContext);

  const [color, setColor] = useState(bgColor);

  const debounceChangeHandler = useMemo(() => debounce((color) => {
    handleBgColor(color);
    localStorage.setItem('bgColor', color);
  }, 400), [handleBgColor]);

  useEffect(() => {
    debounceChangeHandler(color);
  }, [debounceChangeHandler, color]);

  useEffect(() => {
    const initialColor = localStorage.getItem('bgColor');
    if (initialColor) setColor(initialColor);
  }, []);
  
  return (
    <LogoContainer>
      <p>T</p>
      <div>
        <button />
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>
      <p>D</p>
      <p>Y</p>
    </LogoContainer>
  )
}

export default Logo;