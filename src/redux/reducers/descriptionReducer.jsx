const initialState = {
  descriptionData: null,
};

const descriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DESCRIPTION_DATA': {
      return { ...state, descriptionData: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const actions = {
  setDescData: (payload) => ({ type: 'SET_DESCRIPTION_DATA', payload }),
};

export default descriptionReducer;
