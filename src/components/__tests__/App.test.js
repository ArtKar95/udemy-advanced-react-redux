import { shallow } from 'enzyme';
import React from 'react';
// import ReactDom from 'react-dom';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});
it('shows the comment box', () => {
  // const div = document.createElement('div');

  // ReactDom.render(<App />, div);

  //   expect(div.innerHTML).toContain('Comment Box');

  // ReactDom.unmountComponentAtNode(div);

  //Enzyme version
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('show the comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
