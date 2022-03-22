import { actions } from '../reducers/mainReducer';
import apiSearch from '../../api/apiSearch';

export const getSearchQueryDataTc = (value, sorted, category, pageCount) => (dispatch) => {
  dispatch(actions.setLoadStatus(true));
  if (pageCount === 1) {
    dispatch(actions.removeSearchData([]));
  }
  apiSearch.getSearchData(value, sorted, category, pageCount).then((response) => {
    if (response.status === 200) {
      dispatch(actions.setSearchData(response.data.items));
      dispatch(actions.setTotalItems(response.data.totalItems));
    }
    dispatch(actions.setLoadStatus(false));
    dispatch(actions.setPageCount(pageCount + 1));
  });
};

export const setSerachValueTc = (value) => (dispatch) => {
  dispatch(actions.setSearchValue(value));
};

export const setSelectedValueSortedTc = (value) => (dispatch) => {
  dispatch(actions.setSelectedValueSorted(value));
};
export const setSelectedValueCategoriesTc = (value) => (dispatch) => {
  dispatch(actions.setSelectedValueCategories(value));
};
