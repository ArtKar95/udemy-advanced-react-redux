import axios from "axios";
import { SAVE__COMMENT, FETCH__COMENTS, CHANGE_AUTH } from "./types";
export const saveComment = (comment) => {
  return {
    type: SAVE__COMMENT,
    payload: comment,
  };
};

export const fetchComments = () => {
  const response = axios.get(
    "http://jsonplaceholder.typicode.com/posts/1/comments"
  );
  return {
    type: FETCH__COMENTS,
    payload: response,
  };
};

export const changeAuth = (isLoggedin) => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedin,
  };
};
