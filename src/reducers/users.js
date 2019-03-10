import {REQUEST_USERS} from '../actions';

const postByKey = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return {...state,
          [action.payload]: state,
      };
    default:
      return state;
  }
};

export default postByKey;
