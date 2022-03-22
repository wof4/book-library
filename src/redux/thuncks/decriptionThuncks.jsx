import getDescData from '../../api/apiDesc';
import { actions } from '../reducers/descriptionReducer';

export const setDescriptionDataTc = (data) => (dispatch) => {
  if (data) {
    getDescData(data.selfLink).then((response) => {
      if (response.status === 200) {
        dispatch(actions.setDescData(response.data));
      }
    });
  } else {
    dispatch(actions.setDescData(data));
  }
};

export const setSerachValueTc = () => () => {
};
