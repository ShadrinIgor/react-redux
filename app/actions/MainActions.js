import {_SUCCESS, _REQUEST} from '../constants/baseTypes'
import {GET_MAIN_LIST} from '../constants/Main'

var mockApiData = [
    {
        id: 1,
        name: 'Enter Sandman'
    },
    {
        id: 2,
        name: 'Welcome Home'
    },
    {
        id: 3,
        name: 'Master of Puppets'
    },
    {
        id: 4,
        name: 'Fade to Black'
    }
];

export const getMainList = () => dispatch => {
    setTimeout(() => {
        console.log('I got tracks');
        dispatch({ type: 'GET_MAIN_LIST'+_SUCCESS, payload: mockApiData })
    }, 2000)
};

/*
import {_REQUEST} from '../constants/baseTypes'
import {SET_MAIN_LIST, GET_MAIN_LIST} from '../constants/Main'

function getMainList() {
    return async (dispatch) => {
        await dispatch({
            type: GET_MAIN_LIST + _REQUEST,
            method: 'GET',
            endpoint: `api/getMainList/`,
        });
    };
}

function setMainList( list ){
    return {
        type : SET_MAIN_LIST,
        main_list : list
    }
}

export {
    getMainList,
    setMainList
}*/
