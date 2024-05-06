import React from 'react';
import { FormControl, FormLabel, MenuItem, Select } from '@mui/material';

const FilterSelector = ({ selectedFilter, handleFilterTypeChange, filterOptions }) => {
  return (
    <FormControl fullWidth>
      <FormLabel>Filter by:</FormLabel>
      <Select
        value={selectedFilter}
        onChange={handleFilterTypeChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">
          <em>Select a filter</em>
        </MenuItem>
        {filterOptions.map(option => (
          <MenuItem key={option.key} value={option.key}>{option.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterSelector;
