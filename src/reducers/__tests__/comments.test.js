import { SAVE__COMMENT } from '../../actions/types';
import commentsReducer from '../comments';

it('handles action of type SAVE__COMMENT', () => {
  const action = {
    type: SAVE__COMMENT,
    payload: 'Test',
  };
  const newState = commentsReducer([], action);

  expect(newState).toEqual(['Test']);
});

it('handles action with unknoun type', () => {
  const newState = commentsReducer([], { type: 'UNKNOWN' });

  expect(newState).toEqual([]);
});
