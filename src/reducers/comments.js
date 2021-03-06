import { FETCH_COMMENTS, COMMENTS_LOAD_START, COMMENTS_LOAD_END } from '../actions/comments';

import mockCommentsJson from '../services/fixtures/comments.json';
const initialState = {
  list: mockCommentsJson,
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_COMMENTS:
      return { ...state, list: [...payload] };
    case COMMENTS_LOAD_START:
      return { ...state, loading: true };
    case COMMENTS_LOAD_END:
      return { ...state, loading: false };
    default:
      return state;
  }
}

