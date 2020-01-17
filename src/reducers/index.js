import logReducer from './log';
import counterReducer from './counter';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    log: logReducer
});

export default allReducers;