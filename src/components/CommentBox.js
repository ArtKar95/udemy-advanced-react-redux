import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchComments, saveComment } from "../actions";
import requireAuth from "./requireAuth";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(saveComment(comment));
    setComment("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add a comment</h2>
        <textarea onChange={handleChange} value={comment} />
        <div>
          <button>Add comment</button>
        </div>
      </form>
      <button
        className="fetch-comments"
        onClick={() => dispatch(fetchComments())}
      >
        Fetch comments
      </button>
    </div>
  );
};

export default requireAuth(CommentBox);
