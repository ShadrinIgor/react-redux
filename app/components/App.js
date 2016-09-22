import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import * as userActions from '../actions/UserActions'

class App extends Component {
    render() {
        return <div>
            <User user={this.props.user} actions={this.props.userActions} />
        </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators( userActions, dispatch )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)