import { saveComment } from '..';
import { SAVE__COMMENT } from '../types';

describe('sendTest', () => {
  it('has the correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE__COMMENT);
  });

  it('has the correct payload', () => {
    const action = saveComment('comment');
    expect(action.payload).toEqual('comment');
  });
});
