import React, { memo } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Preview from '../Preview';

function Client(props) {
  const { card } = props;
  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 250,
      height: 480,
      textAlign: 'center',
      padding: '14px',
      boxShadow: 3,
      ':hover': {
        boxShadow: 7,
      },
    }}
    >

      <Typography
        variant="subtitle2"
        display="flex"
        alignItems="center"
        textAlign="center"
        sx={{ fontWeight: '600', height: '80px' }}
      >
        {card.volumeInfo.title}
      </Typography>
      <Preview
        path={card.volumeInfo.imageLinks ? card.volumeInfo.imageLinks.smallThumbnail : ''}
        styles={{ width: '80%', margin: '10px', boxShadow: 10 }}
      />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ width: '100%', display: 'flex', textAlign: 'start' }}>
          <Typography variant="subtitle2" fontWeight="600">Categories:&nbsp;</Typography>
          <Typography variant="subtitle2" color="text.secondary" width="100%" textAlign="start">
            {`${card.volumeInfo.categories || ''}`}
          </Typography>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', textAlign: 'start' }}>
          <Typography variant="subtitle2" fontWeight="600">Autor:&nbsp;</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {`${`${card.volumeInfo.authors}` || ''}`}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default memo(Client);
