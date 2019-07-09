/**
 * Root Reducer
 */
import { combineReducers } from 'redux';
import authReducer from './auth';
import navReducer from './nav';
import errorReducer from './error';

export default combineReducers({
	auth: authReducer,
	nav: navReducer,
	error: errorReducer
});
