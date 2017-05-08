import { combineReducers } from 'redux';

import main from './main';
import content from './content';

export default combineReducers({
    main,
    content
});