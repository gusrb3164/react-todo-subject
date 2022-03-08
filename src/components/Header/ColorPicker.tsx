import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineBgColors } from "react-icons/ai";
import { SketchPicker } from "react-color";

import "../../styles/Header.css";

type ColorPickerProps = {
  color: string;
  handleChangeColor: (color: string) => void;
};

const ColorPicker = ({ color, handleChangeColor }: ColorPickerProps) => {
  const [displayColorPicker, setDisplayColorPicker] = useState<Boolean>(false);

  const handleClickDisplayButton = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  return (
    <>
      <Button
        sx={{ color: color, backgroundColor: "white" }}
        id="colorPickerButton"
        size="large"
        onClick={() => handleClickDisplayButton()}
      >
        <AiOutlineBgColors />
      </Button>
      {displayColorPicker && (
        <SketchPicker
          className="colorPicker"
          color={color}
          onChange={(color) => handleChangeColor(color.hex)}
        />
      )}
    </>
  );
};

export default ColorPicker;
