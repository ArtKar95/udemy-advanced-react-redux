import React, { Component } from "react";
import CommentList from "./CommentList";
import CommentBox from "./CommentBox";
import { Link, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../actions";

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign in</button>
      );
    }
  }
  renderHead() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Poist a comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
  render() {
    return (
      <>
        {this.renderHead()}
        <Routes>
          <Route path="/post" element={<CommentBox />} />
          <Route path="/" element={<CommentList />} />
        </Routes>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, actions)(App);
