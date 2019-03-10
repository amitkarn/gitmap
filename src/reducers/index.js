import { combineReducers } from 'redux';
import searchResult from './searchResult';
import postByKey from './users';
import visibilityFilter from './visibilityFilter'

const chuckNorris = combineReducers({
  searchResult,
  postByKey,
  visibilityFilter,
});

export default chuckNorris;
