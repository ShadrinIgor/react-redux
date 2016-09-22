import React, { PropTypes, Component } from 'react'
import Axios from 'axios'

export default class User extends Component {
    render() {

        return <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="panel panel-success">
                            { this.props.user.error ? <div className="panel panel-danger"><div className="panel-heading">{this.props.user.error}</div></div> : null}
                            <div className="panel-body">
                                <div className="form-group">
                                    <label htmlFor="inputEmail">Name:</label>
                                    <input type="text" className="form-control" name="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputEmail">Surname:</label>
                                    <input type="text" className="form-control" name="surname" />
                                </div>
                                <div className="text-center">
                                    <input type="button" onClick={this.actionSetName.bind( this )} name="send-form" value="Send" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    }

    actionSetName( event ){
        var name = document.querySelector("input[name=name]").value;
        var surname = document.querySelector("input[name=surname]").value;
        var error = '';
        var _this = this;

        if( name && surname ){
            this.props.actions.setError('');

            if( name.search(/([а]{2})?([a]{2})?/g) > -1 ){
                error = 'Incorrect name';
            }

            if( surname.split("-").length > 2 ){
                error = 'Incorrect surname';
            }

            if( !error ){
                Axios.post('http://sample.com/api/v3/contact', {
                        name : name,
                        surname : surname
                    })
                    .then( function ( response ){
                        _this.props.actions.setNameAndSurname( name, surname );
                    })
                    .catch( function ( error ){
                        _this.props.actions.setError('Error send data');
                    });
            }
        }
            else
                error = 'All fields are required';

        if( error ) this.props.actions.setError(error);
    }
}
