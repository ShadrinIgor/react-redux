import {_SUCCESS} from '../constants/baseTypes'
import {GET_CONTENT,GET_CARD} from '../constants/Content'

const initialState = {
        name: '',
        description: '',
        items: []
}

export default function card(state = initialState, action) {

    switch ( action.type ){

        case GET_CARD + _SUCCESS :
            return action.content

        default :
            return state
    }

}