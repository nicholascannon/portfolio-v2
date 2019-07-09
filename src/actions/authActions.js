/**
 * Authentication actions
 */
import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOAD_USER,
	LOAD_FAIL,
	LOGOUT,
	LOADING,
	NEW_ERROR
} from '../actions/types';
import axios from 'axios';

export const load_user = () => (dispatch, getState) => {
	dispatch({ type: LOADING });
	const token = getState().auth.token;
	if (token) {
		axios
			.get('/api/auth/verify')
			.then(res => dispatch({ type: LOAD_USER, payload: res.data }))
			.catch(err => {
				dispatch({ type: LOAD_FAIL });
				dispatch({
					type: NEW_ERROR,
					payload: { msg: err.response.data.msg, status: err.response.status, id: LOAD_FAIL }
				});
			});
	} else {
		dispatch({ type: NEW_ERROR, payload: { msg: 'No token', id: LOAD_FAIL } });
		dispatch({ type: LOAD_FAIL });
	}
};

export const login = (email, password) => dispatch => {
	dispatch({ type: LOADING });
	axios
		.post(
			'/api/auth/login',
			{ email, password },
			{ headers: { 'Content-Type': 'application/json' } }
		)
		.then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
		.catch(err => {
			dispatch({ type: LOGIN_FAIL });
			dispatch({
				type: NEW_ERROR,
				payload: { msg: err.response.data.msg, code: err.response.status, id: LOGIN_FAIL }
			});
		});
};
