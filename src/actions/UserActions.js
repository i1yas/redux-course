import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE
} from '../constants/User'

export function handleLogin() {
	return (dispatch) => {
		dispatch({
			type: LOGIN_REQUEST
		})

		VK.Auth.login((r) => { // eslint-disable-line no-undef
			if(r.session) {
				let userName = r.session.user.first_name

				dispatch({
					type: LOGIN_SUCCESS,
					payload: userName
				})
			} else {
				dispatch({
					type: LOGIN_FAILURE,
					payload: new Error('Ошибка авторизации'),
					error: true
				})
			}
		}, 4)
	}
}