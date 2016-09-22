import {SET_NAME_SURNAME, SET_ERROR} from '../constants/User'

export function setNameAndSurname( name, surname ){
    return {
        type : SET_NAME_SURNAME,
        name : name,
        surname : surname
    }
}

export function setError(error){
    return {
        type: SET_ERROR,
        error :error
    }
}