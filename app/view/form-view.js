import React from 'react';

export default React.createClass({
    render : function(){
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="panel panel-success">
                        <div className="panel-body">
                            {this.props.error}
                            <div className="form-group">
                                <label for="inputEmail">Name:</label>
                                <input type="text" className="form-control" name="name" />
                            </div>
                            <div class="form-group">
                                <label for="inputEmail">Surname:</label>
                                <input type="text" className="form-control" name="surname" />
                            </div>
                            <div class="text-center">
                                <input type="button" onClick={this.props.sendData} name="send-form" value="Send" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});