import { combineReducers } from 'redux';

import main from './main';
import content from './content';
import card from './card';

export default combineReducers({
    main,
    content,
    card
});