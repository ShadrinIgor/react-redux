import React from 'react';
import { Provider, Router, Route, browserHistory, IndexRoute } from 'react-router';
import FormContainer from './containers/form-container.js';
import store from './store.js';

React.render(
    <Provider store={store} >
        <Router history={browserHistory}>
            <Route path="/" component={FormContainer} />
        </Router>
    </Provider>,
    document.getElementById('root')
);