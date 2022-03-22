import React, { memo, useCallback } from 'react';
import { Box } from '@mui/material';
import Card from './Card';

function Cards({ setDescriptionData, cardList }) {
  const handleClick = useCallback((value) => {
    setDescriptionData(value);
  }, []);

  return (
    <Box container display="flex" justifyContent="center" flexWrap="wrap">
      {cardList && cardList.map((item) => (
        <Box sx={{ padding: '14px' }} key={item.id + item.etag} onClick={() => handleClick(item)}>
          <Card card={item} />
        </Box>
      ))}
    </Box>
  );
}

export default memo(Cards);
