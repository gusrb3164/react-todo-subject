import React from "react";
import ColorPicker from "./ColorPicker";
import Filter from "./Filter";

type HeaderProps = {
  filter: "total" | "completed" | "uncompleted";
  color: string;
  handleChangeFilter: (filter: "total" | "completed" | "uncompleted") => void;
  handleChangeColor: (color: string) => void;
};

const Header = ({ filter, handleChangeFilter }: HeaderProps) => {
  return (
    <>
      <ColorPicker />
      <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
    </>
  );
};

export default Header;
