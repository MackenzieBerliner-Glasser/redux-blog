import { getComments } from '../services/blogService';

export const COMMENTS_LOAD_START = 'COMMENTS_LOAD_START';
export const COMMENTS_LOAD_END = 'COMMENTS_LOAD_END';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const fetchComments = id => ({
  type: FETCH_COMMENTS,
  loadStart: COMMENTS_LOAD_START,
  loadEnd: COMMENTS_LOAD_END,
  payload: getComments(id)
});