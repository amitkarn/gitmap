/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import PropTypes from 'prop-types';
import {createEpicMiddleware} from 'redux-observable';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from './src/reducers';
import rootEpic from './src/epics';
import App from './src/App';

import {AppRegistry} from 'react-native';

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(reducers, composeEnhancers(applyMiddleware(epicMiddleware)));

export default class GitMap extends Component {

    // Called from App. Child View Component can get values from here.
    getChildContext() {
        const { initialScene, data } = this.props;
        if (data && typeof (data) === 'object') {
            return { data, initialScene };
        }
        return { initialScene }; // No data
    }
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

GitMap.childContextTypes = {
    data: PropTypes.oneOfType([
        PropTypes.shape({ }),
        PropTypes.string,
    ]),
    initialScene: PropTypes.string,
};

AppRegistry.registerComponent('gitmap', () => GitMap);