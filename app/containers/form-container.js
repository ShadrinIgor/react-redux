import React from 'react';
import Form from '../view/form-view.js';
import Axios from 'axios';

const FormContainer = React.createClass({
    sendData : function (){
        var name = document.querySelector("input[name=name]").value;
        var surname = document.querySelector("input[name=surname]").value;
        var error = '';

        if( name && surname ){
            if( name.search(/([а]{2})/g) > -1 ){
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
                    store.dispatch({
                        type: 'ADD_USER',
                        user: {name: name, surname:surname}
                    });
                })
                .catch( function ( error ){
                    error = 'Error send data';
                });
            }
        }

        if( error )
        {
            store.dispatch({
                type: 'ADD_USER',
                user: {name: name, surname:surname},
                error : error
            });
        }
    },

    render: function () {
        return (
            <Form sendData={this.sendData}/>
        )
    }
});

export default FormContainer;