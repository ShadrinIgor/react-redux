import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMainList } from '../actions/MainActions';

export default class App extends Component {
    render() {

        return <div className="row">
            <button onClick={this.props.getMainListActions}>Get main list</button>
        </div>
    }
}


export default connect(
    state => ({
        main_list: state.main_list
    }),
    dispatch => ({
        getMainListActions: () => {
            dispatch(getMainList());
        }
    })
)(App);
