import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { setDescriptionDataTc } from '../../../redux/thuncks/decriptionThuncks';
import ButtonClose from '../../pageComponents/ButtonClose';
import Preview from '../../pageComponents/Preview';
import s from './description.module.css';

function DescriptionPage({ data }) {
  const dispatch = useDispatch();

  const setDescriptionData = useCallback(() => {
    dispatch(setDescriptionDataTc(null));
  }, []);

  const handleClose = () => {
    dispatch(setDescriptionDataTc(null));
  };

  const image = data.volumeInfo.imageLinks;

  return (
    <Modal keepMounted open onClose={handleClose}>
      <Box className={s.desc_container}>
        <ButtonClose setDescriptionData={setDescriptionData} />
        <Box className={s.desc_image_container}>
          <Preview
            path={image ? image.medium || image.small || image : ''}
            styles={{ padding: 2 }}
          />
        </Box>
        <Box className={s.desc_text_container}>
          <Typography className={s.typography}>
            {data.volumeInfo.title}
          </Typography>
          <Box maxHeight="50vw" overflow="auto" padding="10px" border="1px solid grey" borderRadius="10px">
            <Typography
              variant="subtitle2"
              fontWeight="400"
              dangerouslySetInnerHTML={{ __html: data.volumeInfo.description }}
            />
          </Box>
          <Box>
            <Typography variant="subtitle2" fontWeight="600">Categories:&nbsp;</Typography>
            <Typography variant="subtitle2" color="text.secondary" width="100%" textAlign="start">
              {`${data.volumeInfo.categories || ''}`}
            </Typography>

            <Typography variant="subtitle2" fontWeight="600">Autor:&nbsp;</Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {`${`${data.volumeInfo.authors}` || ''}`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default memo(DescriptionPage);
