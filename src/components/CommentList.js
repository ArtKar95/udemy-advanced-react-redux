import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  commentRender() {
    return this.props.comments.map((comment) => (
      <li key={comment}>{comment}</li>
    ));
  }
  render() {
    return <ul>{this.commentRender()}</ul>;
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps)(CommentList);
