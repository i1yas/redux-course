import {
	LOGIN_SUCCESS,
	LOGIN_FAILURE
} from '../constants/User'

const initialState = {
	name: '',
	error: ''
}

export default function user(state = initialState, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {...state, name: action.payload, error: ''}
		case LOGIN_FAILURE:
			return {...state, error: action.payload.message}
		default:
			return state
	}
}