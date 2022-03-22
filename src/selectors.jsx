//  main  //
export const getSearchValue = (state) => state.mainReducer.searchValue;
export const getCardsList = (state) => state.mainReducer.searchData;
export const getSelectorCategories = (state) => state.mainReducer.selectorCategories;
export const getSelectorSorted = (state) => state.mainReducer.selectorSorted;
export const getPageCount = (state) => state.mainReducer.pageCount;
export const getLoadingStatus = (state) => state.mainReducer.isLadding;
export const getTotalItems = (state) => state.mainReducer.totalItems;
// desc //
export const getDescData = (state) => state.descriptionReducer.descriptionData;
