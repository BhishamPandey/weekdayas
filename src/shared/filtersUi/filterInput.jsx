import React from 'react';
import { Box, TextField, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material';

const FilterInput = ({ selectedFilter, filters, handleFilterValueChange, handleWorkTypeChange, filterOptions }) => {
  return (
    <Box sx={{ mb: 2 }}> 
      {selectedFilter === 'workType' ? (
        <FormControl component="fieldset"> 
          <FormLabel component="legend">Work Type</FormLabel>
          <RadioGroup
            row
            name="workType"
            value={filters.workType || ''} 
            onChange={handleWorkTypeChange} 
          >
            <FormControlLabel value="remote" control={<Radio />} label="Remote" />
            <FormControlLabel value="onsite" control={<Radio />} label="On-site" />
          </RadioGroup>
        </FormControl>
      ) : (
        <TextField
          fullWidth
          type="text"
          name={selectedFilter}
          value={filters[selectedFilter] || ''}
          onChange={handleFilterValueChange}
          label={`Enter ${filterOptions.find(opt => opt.key === selectedFilter)?.name}`}
          variant="outlined"
        />
      )}
    </Box>
  );
};

export default FilterInput;
