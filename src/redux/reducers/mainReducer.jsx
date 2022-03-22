const initialState = {
  searchData: [],
  searchValue: '',
  selectorCategories: {
    title: 'Categories',
    values: [
      'all',
      'art',
      'biography',
      'computers',
      'history',
      'medical',
      'poetry',
    ],
    selecterValue: 'all',
  },
  selectorSorted: {
    title: 'Sorted by',
    values: ['relevance', 'newest'],
    selecterValue: 'relevance',
  },
  pageCount: 1,
  isLadding: false,
  totalItems: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELETED_VALUE_CATEGORIES': {
      return {
        ...state,
        selectorCategories:
          { ...state.selectorCategories, selecterValue: action.payload },
      };
    }
    case 'SET_SELETED_VALUE_SORTED': {
      return {
        ...state,
        selectorSorted:
          { ...state.selectorSorted, selecterValue: action.payload },
      };
    }
    case 'SET_SEARCH_DATA': {
      return { ...state, searchData: [...state.searchData, ...action.payload] };
    }
    case 'REMOVE_SEARCH_DATA': {
      return { ...state, searchData: action.payload };
    }
    case 'SET_SEARCH_VALUE': {
      return { ...state, searchValue: action.payload };
    }
    case 'SET_LOAD_STATUS': {
      return { ...state, isLadding: action.payload };
    }
    case 'SET_PAGE_COUNT': {
      return { ...state, pageCount: action.payload };
    }
    case 'SET_TOTAL_ITEMS': {
      return { ...state, totalItems: action.payload };
    }

    default: {
      return state;
    }
  }
};

export const actions = {
  setSearchData: (payload) => ({ type: 'SET_SEARCH_DATA', payload }),
  setSearchValue: (payload) => ({ type: 'SET_SEARCH_VALUE', payload }),
  setSelectedValueSorted: (payload) => ({ type: 'SET_SELETED_VALUE_SORTED', payload }),
  setSelectedValueCategories: (payload) => ({ type: 'SET_SELETED_VALUE_CATEGORIES', payload }),
  setLoadStatus: (payload) => ({ type: 'SET_LOAD_STATUS', payload }),
  setPageCount: (payload) => ({ type: 'SET_PAGE_COUNT', payload }),
  removeSearchData: (payload) => ({ type: 'REMOVE_SEARCH_DATA', payload }),
  setTotalItems: (payload) => ({ type: 'SET_TOTAL_ITEMS', payload }),
};

export default mainReducer;
