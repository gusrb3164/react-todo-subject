import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

type FilterProps = {
  filter: "total" | "completed" | "uncompleted";
  handleChangeFilter: (filter: "total" | "completed" | "uncompleted") => void;
};

const Filter = ({ filter, handleChangeFilter }: FilterProps) => {
  const statusFilters = [
    {
      value: "total",
      text: "전체",
    },
    {
      value: "completed",
      text: "완료",
    },
    {
      value: "uncompleted",
      text: "미완료",
    },
  ];

  const menuItems = statusFilters.map((statusFilter) => (
    <MenuItem value={statusFilter?.value}>{statusFilter.text}</MenuItem>
  ));

  const onChangeFilter = (e: any) => {
    handleChangeFilter(e.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="filter-select-label">Age</InputLabel>
      <Select
        labelId="filter-select-label"
        id="filter-select"
        value={filter}
        label="filter"
        onChange={(e) => onChangeFilter(e)}
      >
        {menuItems}
      </Select>
    </FormControl>
  );
};

export default Filter;
