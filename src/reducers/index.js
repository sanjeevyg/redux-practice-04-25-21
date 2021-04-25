import  counterReducer from './counter';
import isloggedReducer from './islogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    islogged: isloggedReducer
});

export default allReducers;