/*
 * Action types
 */

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REQUEST_USERS = 'REQUEST_USERS';

/*
 * Action creators
 */

export const requestUsers = (key) => {
    return {
        type: REQUEST_USERS,
        payload: key,
        isFetching: true,
    }
};

export const receiveUsers = (response) => {
    console.log(err, response)
    return {
        type: RECEIVE_USERS,
        payload: response,
        isFetching: false,
    }
};
