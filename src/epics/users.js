import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/pluck";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/debounceTime";
import {ajax} from "rxjs/observable/dom/ajax";
import {REQUEST_USERS, receiveUsers} from "../actions";

export const getUsers = action$ => {
    return action$.ofType(REQUEST_USERS)
        .debounceTime(500)
        .distinctUntilChanged()
        .switchMap(action => {
            console.log(action.payload)
            return ajax.getJSON(`https://api.github.com/search/users?q=${action.payload}+in:fullname&&order=desc&sort=followers`,
                {"Accept": "application/vnd.github.v3.text-match+json"})
                .map(response => receiveUsers(response))
                .catch(error => receiveUsers({}));
        });
};
