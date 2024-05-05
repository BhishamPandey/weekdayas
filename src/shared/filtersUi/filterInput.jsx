import React from 'react';
import { Box, TextField, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material';

const FilterInput = ({ selectedFilter, filters, handleFilterValueChange, handleWorkTypeChange, filterOptions }) => {
  return (
    <Box sx={{ mb: 2 }}> 
      {selectedFilter === 'workType' ? (
        <FormControl component="fieldset"> 
          <FormLabel component="legend">Work Type</FormLabel> {/* Label for work type selection */}
          <RadioGroup
            row // Arrange radio buttons horizontally
            name="workType" // Name attribute for radio buttons
            value={filters.workType || ''} 
            onChange={handleWorkTypeChange} 
          >
            <FormControlLabel value="remote" control={<Radio />} label="Remote" /> {/* Remote option */}
            <FormControlLabel value="onsite" control={<Radio />} label="On-site" /> {/* On-site option */}
          </RadioGroup>
        </FormControl>
      ) : (
        <TextField
          fullWidth // Occupy full width of container
          type="text" // Text input field
          name={selectedFilter} // Name attribute for text field
          value={filters[selectedFilter] || ''} // Set initial value based on filter state
          onChange={handleFilterValueChange} // Function to handle text input changes
          label={`Enter ${filterOptions.find(opt => opt.key === selectedFilter)?.name}`} // Dynamic label based on filter option name
          variant="outlined" // Outlined text field style
        />
      )}
    </Box>
  );
};

export default FilterInput;
