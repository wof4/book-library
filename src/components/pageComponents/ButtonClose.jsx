import React, { memo, useCallback } from 'react';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function ButtonClose({ setDescriptionData }) {
  const hadleClose = useCallback(() => {
    setDescriptionData(null);
  }, []);

  return (
    <Box
      onClick={() => hadleClose()}
      sx={{
        transform: 'rotate(45deg)', position: 'absolute', top: '-16px', right: '-16px',
      }}
    >
      <Fab size="small" color="primary" aria-label="close">
        <AddIcon />
      </Fab>
    </Box>
  );
}

export default memo(ButtonClose);
