import {SET_MAIN_LIST} from '../constants/Main'
import {_SUCCESS} from '../constants/baseTypes'

const initialState = {
    main_list: [],
}

export default function test(state = initialState, action) {

    switch ( action.type ){
        case SET_MAIN_LIST + _SUCCESS :
            return { ...state, main_list:action.payload }

        default :
            return state
    }

}