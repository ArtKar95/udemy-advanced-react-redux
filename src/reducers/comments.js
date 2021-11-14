import { SAVE__COMMENT } from '../actions/types';

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE__COMMENT: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default commentsReducer;
