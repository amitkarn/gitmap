import { combineEpics } from 'redux-observable';
import { getUsers } from './users';

const rootEpic = combineEpics(getUsers);

export default rootEpic;
