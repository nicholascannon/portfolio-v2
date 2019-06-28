/**
 * Authentication reducer
 */
const initState = {
	token: localStorage.getItem('token'),
	isAuthenticated: false,
	loadingUser: false
};

export default function(state = initState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
