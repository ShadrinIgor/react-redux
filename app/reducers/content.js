import {_SUCCESS} from '../constants/baseTypes'
import {GET_CONTENT} from '../constants/Content'

const initialState = {
    name: '',
    description: '',
    items: []
}

export default function content(state = initialState, action) {

    switch ( action.type ){
        case GET_CONTENT + _SUCCESS :
            return { ...state, content:action.content }

        default :
            return state
    }

}