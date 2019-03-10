import {RECEIVE_USERS} from '../actions';

const searchResult = (state = {}, action) => {
console.log(state);
console.log(action);
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        items: action.payload
      };

    default:
      return state;
  }
};
export default searchResult;
