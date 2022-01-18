import { Grid } from "@mui/material";
import React from "react";
import ColorPicker from "./ColorPicker";
import Filter from "./Filter";

type HeaderProps = {
  filter: "total" | "completed" | "uncompleted";
  color: string;
  handleChangeFilter: (filter: "total" | "completed" | "uncompleted") => void;
  handleChangeColor: (color: string) => void;
};

const Header = ({
  filter,
  color,
  handleChangeFilter,
  handleChangeColor,
}: HeaderProps) => {
  return (
    <Grid container spacing={2} className="headerWrapper">
      <Grid item xs={2}>
        <ColorPicker color={color} handleChangeColor={handleChangeColor} />
      </Grid>
      <Grid item xs={10}>
        <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
      </Grid>
    </Grid>
  );
};

export default Header;
