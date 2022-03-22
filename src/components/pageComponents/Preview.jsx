/* eslint-disable react/no-string-refs */
import React, {
  memo, useRef, useState, useEffect,
} from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';

function Preview(props) {
  const { path, styles } = props;
  const httpsPath = path.replace('http', 'https');
  const style = { width: '0' };

  const useImageLoaded = () => {
    const [loaded, setLoaded] = useState(false);
    const ref = useRef();
    const onLoad = () => {
      setLoaded(true);
    };

    useEffect(() => {
      if (ref.current && ref.current.complete) {
        setLoaded(true);
      }
    });

    return [ref, loaded, onLoad];
  };

  const [ref, loaded, onLoad] = useImageLoaded();
  return (
    <Box sx={loaded ? styles : style}>
      <CardMedia
        onLoad={onLoad}
        ref={ref}
        width="100%"
        component="img"
        image={httpsPath}
        alt="Paella dish"
      />
    </Box>
  );
}

export default memo(Preview);
