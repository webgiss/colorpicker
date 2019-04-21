import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import debug from './debug';
import colors from './colors';

export default (history) => combineReducers({
    router: connectRouter(history),
    debug,
    colors,
});

