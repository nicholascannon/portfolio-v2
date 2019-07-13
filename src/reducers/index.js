/**
 * Root Reducer
 */
import { combineReducers } from 'redux';
import authReducer from './auth';
import navReducer from './nav';
import errorReducer from './error';
import adminReducer from './admin';
import contactReducer from './contact';

export default combineReducers({
	auth: authReducer,
	nav: navReducer,
	error: errorReducer,
	admin: adminReducer,
	contact: contactReducer
});
