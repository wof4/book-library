import React, { memo } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function SearchField(props) {
  const { setSerachValue, getSearchQueryData, searchValue } = props;
  return (
    <Paper
      sx={{
        p: '2px 4px', display: 'flex', alignItems: 'center', width: '50%',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, borderRadius: '20px' }}
        placeholder="Search Books"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={searchValue}
        onChange={(event) => {
          setSerachValue(event.target.value);
        }}
      />
      <IconButton onClick={() => { getSearchQueryData(searchValue, 1); }} sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default memo(SearchField);
