import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
       <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a textarea and two buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});
describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' },
    });
    wrapped.update();
  });

  it('has a text area and user can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('after submit text area get empty', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
