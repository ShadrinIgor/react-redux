import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMainList} from '../actions/MainActions';
import {getContent} from '../actions/ContentActions';

class LeftBlock extends Component {
    render() {

        return <div className="col-xs-2 leftBlock">Левый блок
            <ul>
                {this.props.main_list.map((item, index) =>
                    <li key={index}><a onClick={this.props.getContentActions.bind(this, item.id)}>{item.name}</a></li>
                )}
                { this.props.main_list.length == 0 ? 'Загрузка...' : '' }
            </ul>
        </div>
    }
}

class CenterBlock extends Component {
    render() {
        console.log(this.props.content);
        return <div className="col-xs-10 leftBlock">Центральный блок
            {this.props.content &&
            <div>
                <div className="panel panel-info">
                    <div className="panel-heading"><h2 className="panel-title">{this.props.content.name}</h2></div>
                    <div className="panel-body"
                         dangerouslySetInnerHTML={{__html: this.props.content.description}}></div>
                </div>
                { this.props.content && this.props.content.items &&
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

                            <div className="carousel-inner" role="listbox">
                                {this.props.content.items.map((item, index) =>
                                    <div className={index == 0 ? 'item active' : 'item'}>
                                        <div className="carousel-caption">
                                            <h3>{item.title}</h3><br/>
                                            <a href="#">№{item.position}. {item.color}</a>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <a className="left carousel-control" href="#carousel-example-generic" role="button"
                               data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#carousel-example-generic" role="button"
                               data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                }
            </div>
            }
        </div>
    }
}

export default class App extends Component {
    componentWillMount() {
        this.props.getMainListActions();
    }

    render() {
        return <div className="row">
            <LeftBlock main_list={this.props.main_list} getContentActions={this.props.getContentActions}/>
            <CenterBlock content={this.props.content}/>
        </div>
    }
}


export default connect(
    state => ({
        main_list: state.main.main_list,
        content: state.content.content
    }),
    dispatch => ({
        getMainListActions: () => {
            dispatch(getMainList());
        },
        getContentActions: (menu_id) => {
            dispatch(getContent(menu_id));
        }
    })
)(App);
