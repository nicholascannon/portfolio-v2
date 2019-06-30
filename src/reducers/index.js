/**
 * Root Reducer
 */
import { combineReducers } from 'redux';
import authReducer from './auth';
import navReducer from './nav';

export default combineReducers({
	auth: authReducer,
	nav: navReducer
});
