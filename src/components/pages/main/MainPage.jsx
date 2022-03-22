import React, { memo, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

import SearchField from '../../pageComponents/SearchField';
import {
  getSearchQueryDataTc,
  setSerachValueTc,
  setSelectedValueSortedTc,
  setSelectedValueCategoriesTc,
} from '../../../redux/thuncks/mainThuncks';
import {
  getSearchValue, getSelectorCategories, getSelectorSorted,
  getDescData, getPageCount, getLoadingStatus, getCardsList,
  getTotalItems,
} from '../../../selectors';
import Cards from '../../pageComponents/cards/Cards';
import Selectors from '../../pageComponents/selectors/selector';
import DescriptionPage from '../description/DescriptionPage';
import { setDescriptionDataTc } from '../../../redux/thuncks/decriptionThuncks';
import LoadMoreButton from '../../pageComponents/LoadMoreButton';
import s from './main.module.css';

function MainPage() {
  const dispatch = useDispatch();

  const searchValue = useSelector(getSearchValue);
  const selectorCategories = useSelector(getSelectorCategories);
  const selectorSorted = useSelector(getSelectorSorted);
  const descriptionData = useSelector(getDescData);
  const pageCount = useSelector(getPageCount);
  const isLoading = useSelector(getLoadingStatus);
  const cardList = useSelector(getCardsList);
  const totalItems = useSelector(getTotalItems);
  const selectedSorted = selectorSorted.selecterValue;
  const selectedCategories = selectorCategories.selecterValue;

  const setSerachValue = useCallback((value) => {
    dispatch(setSerachValueTc(value));
  }, []);

  const getSearchQueryData = useCallback((value, page) => {
    const searchString = value || searchValue;
    const pageNumber = page || pageCount;

    dispatch(getSearchQueryDataTc(searchString, selectedSorted, selectedCategories, pageNumber));
  }, [selectedSorted, selectedCategories, pageCount, searchValue]);

  const setDescriptionData = useCallback((value) => {
    dispatch(setDescriptionDataTc(value));
  }, []);

  const setSelectedValueSorted = useCallback((value) => {
    dispatch(setSelectedValueSortedTc(value));
  }, []);

  const setSelectedValueCategories = useCallback((value) => {
    dispatch(setSelectedValueCategoriesTc(value));
  }, []);

  return (
    <Box className={s.main_wrapper}>
      {descriptionData && (
        <DescriptionPage data={descriptionData} />
      )}
      <Box className={cardList.length ? s.main_search : `${s.main_search} ${s.main_search_center}`}>
        <SearchField
          searchValue={searchValue}
          setSerachValue={setSerachValue}
          getSearchQueryData={getSearchQueryData}
        />
        <Box className={s.main_selectors}>
          <Selectors data={selectorCategories} setSelectedValue={setSelectedValueCategories} />
          <Selectors data={selectorSorted} setSelectedValue={setSelectedValueSorted} />
        </Box>
        {totalItems
          && (
            <Box className={s.main_results}>
              <Typography className={s.main_text}>
                Found
                {' '}
                {totalItems}
                {' '}
                results
              </Typography>
            </Box>
          )}
      </Box>
      <Cards setDescriptionData={setDescriptionData} cardList={cardList} />
      {cardList.length ? <LoadMoreButton loading={isLoading} getDataMore={getSearchQueryData} /> : null}
    </Box>
  );
}

export default memo(MainPage);
