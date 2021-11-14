import { SAVE__COMMENT } from './types';
export const saveComment = (comment) => {
  return {
    type: SAVE__COMMENT,
    payload: comment,
  };
};
