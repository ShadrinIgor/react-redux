import { SubmissionError } from 'redux-form'
import Axios from 'axios'

function submit(values) {
    return  new Promise (  ( resolve, reject ) => {

        var error = false;
        if (!values.name) {
            error = true;
            throw new SubmissionError({ name: 'User does not exist', _error: 'Login failed!' })
        } else {
            if( values.name.search(/([а]{2})+/g) > -1 ){
                error = true;
                throw new SubmissionError({ name: 'Incorrect name', _error: 'Login failed!' })
            }
        }

        if (!values.surname) {
            error = true;
            throw new SubmissionError({ surname: 'Surname does not exist', _error: 'Login failed!' })
        } else {
            if( values.surname.split("-").length > 2 ){
                error = true;
                throw new SubmissionError({ surname: 'Incorrect surname', _error: 'Login failed!' })
            }
        }

        if( !error ){
            Axios.post('http://sample.com/api/v3/contact', {
                    name : values.name,
                    surname : values.surname
                })
                .then( function ( response ){
                })
                .catch( ( error ) => {
                    throw new SubmissionError({ _error: 'Login failed!' });
                })
        }
    })
}

export default submit