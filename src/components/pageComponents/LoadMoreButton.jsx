import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export default function LoadMoreButton({ loading, getDataMore }) {
  function handleClick() {
    getDataMore();
  }

  return (
    <Box>
      <LoadingButton
        sx={{ backgroundColor: '#57acff !important', color: '#fff !important' }}
        onClick={() => handleClick()}
        endIcon={<AutorenewIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
      >
        Load More
      </LoadingButton>
    </Box>
  );
}
