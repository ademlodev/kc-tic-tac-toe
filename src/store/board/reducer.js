import initialState from './initialState';
import { BOARD_SET_SQUARE } from './actions';

const boardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOARD_SET_SQUARE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default boardReducer;
