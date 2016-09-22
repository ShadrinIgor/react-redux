import {SET_NAME_SURNAME, SET_ERROR} from '../constants/User'

const initialState = {
    name: '',
    surname: '',
    error: ''
}

export default function user(state = initialState, action) {

    switch ( action.type ){
        case SET_NAME_SURNAME :
            return { ...state, name:action.payload }

        case SET_ERROR :
            return { ...state, error:action.error}

        default :
            return state
    }

}