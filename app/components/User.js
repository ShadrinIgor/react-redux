import React, { PropTypes, Component } from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import submit from './submit'

const renderInput = ({ input, label, type, meta: { touched, error } }) => (
    <div className="form-group">
        <label htmlFor="inputEmail">{label}:</label>
        {touched && error && <span>{error}</span>}
        <input {...input} className="form-control" placeholder={label} type={type} />
    </div>
);

class User extends Component {
    render() {
        const { error, handleSubmit, pristine, reset, submitting } = this.props;
        return <form onSubmit={handleSubmit(submit)}>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="panel panel-success">
                                {error && <div className="panel panel-danger"><div className="panel-heading">{error}</div></div>}
                                <div className="panel-body">
                                    <Field name="name" component={renderInput} type="text" label="Name"/>
                                    <Field name="surname" component={renderInput} type="text" label="Surname"/>
                                    <div className="text-center">
                                        <button type="submit" name="send-form">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </form>
    }
}

// Decorate the form component
User = reduxForm({
    form: 'addUser', // a unique name for this form
    submit
})(User);

export default User;