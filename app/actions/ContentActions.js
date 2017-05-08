import {_SUCCESS} from '../constants/baseTypes'
import {GET_CONTENT} from '../constants/Content'

const listColors = [ '#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff', '#ffff00', '#ffffff', '#000000'];

let listItems = [];
for(let i=0;i<105;i++){
    let colorRand = Math.floor(Math.random() * (listColors.length-1  + 1));
    listItems.push({title: 'Item '+(i+1),color:listColors[colorRand], position: (i+1), active: true});
}

const mockApiData = {
        1: {
            name: 'Контент 1',
            description: '<b>Описание первого</b> <u>кнтента</u>, Описание первого кнтента, Описание первого кнтента, Описание первого кнтента, Описание первого кнтента',
            items: listItems
        }
        ,
        2: {
            name: 'Контент 2',
            description: '<b>Описание второго</b> <a href="">контента</a>. Описание второго контента. Описание второго контента. Описание второго контента. ',
            items: listItems
        }
        ,
        3: {
            id: 3,
            name: 'Контент 3',
            description: '<b>Описание третего</b> <i>контента</i>. Описание третего контента. Описание третего контента. Описание третего контента. Описание третего контента. ',
            items: listItems
        }

    }
;

const getContent = (menu_id) => dispatch => {
    setTimeout(() => {
        dispatch({type: 'GET_CONTENT' + _SUCCESS, content: mockApiData[menu_id]})
    }, 500)
};

export {
    getContent
}
