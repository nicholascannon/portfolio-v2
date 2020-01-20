/**
 * Admin Actions
 */
import { GET_ABOUT, SAVE_ABOUT, NEW_ERROR } from './types';
import axios from 'axios';

export const getAbout = () => dispatch => {
	axios
		.get('/about/')
		.then(res => dispatch({ type: GET_ABOUT, payload: res.data }))
		.catch(err =>
			dispatch({
				type: NEW_ERROR,
				payload: { msg: err.response.data.msg, code: err.response.status, id: GET_ABOUT }
			})
		);
};

export const saveAbout = (heading, subHeading, body) => (dispatch, getState) => {
	axios
		.post(
			'/about/',
			{ heading, subHeading, body },
			{ headers: { 'Content-Type': 'application/json', Authorization: getState().auth.token } }
		)
		.then(res => dispatch({ type: SAVE_ABOUT, payload: res.data }))
		.catch(err =>
			dispatch({
				type: NEW_ERROR,
				payload: { msg: err.response.data.msg, code: err.response.status, id: SAVE_ABOUT }
			})
		);
};
