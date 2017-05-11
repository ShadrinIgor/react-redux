import {_SUCCESS} from '../constants/baseTypes'
import {GET_MAIN_LIST} from '../constants/Main'

var mockApiData = [
    {
        id: 1,
        name: 'Первый пункт меню'
    },
    {
        id: 2,
        name: 'Второй пункт меню'
    },
    {
        id: 3,
        name: 'Третий пункт меню'
    },
];

const getMainList = () => dispatch => {
    setTimeout(() => {
        dispatch({type: 'GET_MAIN_LIST' + _SUCCESS, main_list: mockApiData})
    }, 500)
};


export {
    getMainList
}
