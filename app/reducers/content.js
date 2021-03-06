import {_SUCCESS} from '../constants/baseTypes'
import {GET_CONTENT,UPDATE_CARDS} from '../constants/Content'

const initialState = {
        name: '',
        description: '',
        items: []
}

export default function content(state = initialState, action) {

    switch ( action.type ){
        case UPDATE_CARDS :
            return { ...state, items: action.list }

        case GET_CONTENT + _SUCCESS :
            return action.content

        default :
            return state
    }

}