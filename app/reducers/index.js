import React from 'react';

var indexReducer = function(state, action) {
    if (state === undefined) {
        state = [];
    }
    if (action.type === 'ADD_USER') {
        state.push(action.user);
    }
    return state;
}

export default indexReducer;