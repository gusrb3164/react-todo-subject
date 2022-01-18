import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

import "../../styles/Header.css";

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
    <FormControl className="filterSelectForm">
      <InputLabel id="filter-select-label">Filter</InputLabel>
      <Select
        labelId="filter-select-label"
        id="filterSelect"
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
