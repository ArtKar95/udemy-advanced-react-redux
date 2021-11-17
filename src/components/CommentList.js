import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  commentRender() {
    return this.props.comments.map((comment, i) => <li key={i}>{comment}</li>);
  }
  render() {
    return (
      <>
        <h4>Comment List</h4>
        <ul>{this.commentRender()}</ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps)(CommentList);
