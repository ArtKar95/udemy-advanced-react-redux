import { SAVE__COMMENT, FETCH__COMENTS } from "../actions/types";

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE__COMMENT: {
      return [...state, action.payload];
    }
    case FETCH__COMENTS: {
      debugger;
      const comments = action.payload.data.map((comment) => comment.name);
      return [...state, ...comments];
    }
    default:
      return state;
  }
};

export default commentsReducer;
