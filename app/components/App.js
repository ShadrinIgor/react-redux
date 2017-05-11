import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMainList} from '../actions/MainActions';
import {getContent,updateCards} from '../actions/ContentActions';

class LeftBlock extends Component {
    constructor() {
        super();
        this.state = {active: 0};
    }

    clickHandler(id) {
        this.state = {active: id};
        this.props.getContentActions.call(this, id);
    }

    render() {
        return <div className="col-xs-12 col-md-2 leftBlock">

            <div className="list-group">
                {this.props.main_list.map((item, index) =>
                    <a href="#" className={this.state.active == item.id ? 'list-group-item active' : 'list-group-item' }
                       key={item.id}
                       onClick={this.clickHandler.bind(this, item.id)}>{item.name}</a>
                )}
                { this.props.main_list.length == 0 ? 'Загрузка...' : '' }
            </div>
        </div>
    }
}

class CenterBlock extends Component {

    constructor(props) {
        super(props)
        this.filterList = this.filterList.bind(this);
    }

    changeStatus(id) {
        let items = this.state.items;
        for(let i=0;i<items.length;i++){
            if(items[i].id == id)items[i].active = !items[i].active;
        }

        this.setState({items: items});

        let paramsItems = this.props.content.items;
        this.props.updateCards(paramsItems);

        this.filterList();
    }

    filterList() {
        let name = document.getElementById('filter_name'),
            color = document.getElementById('filter_color'),
            number = document.getElementById('filter_number'),
            archive = document.getElementById('filter_archive');

        if (this.props.content && this.props.content.items.length > 0) {

            let filteredList = this.props.content.items;

            filteredList = filteredList.filter((item) => {

                let result = true;
                if (name.value) result = item.title.toLowerCase().search(name.value.toLowerCase()) !== -1;
                if (result && color.value) result = item.color.toLowerCase().search(color.value.toLowerCase()) !== -1;
                if (result && number.value) result = item.position.toString().toLowerCase().search(number.value.toLowerCase()) !== -1;
                if (result) result = item.active == archive.checked;

                return result;
            });

            this.setState({items: filteredList});
        }

    }

    componentWillReceiveProps(nextProps) {

        if (nextProps) {
            this.state = nextProps.content && nextProps.content.items.length > 0 ? {items: nextProps.content.items} : {items: []};
        }

    }

    render() {

        return <div className="col-xs-12 col-md-10 leftBlock">
            {this.props.content && this.props.content.id &&
            <div>
                <br/>
                <div className="panel panel-info">
                    <div className="panel-heading"><h2 className="panel-title">{this.props.content.name}</h2></div>
                    <div className="panel-body"
                         dangerouslySetInnerHTML={{__html: this.props.content.description}}></div>
                </div>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title">Поиск</h3>
                    </div>
                    <div className="panel-body">
                        <div className="col-xs-5">
                            <div className="form-group">
                                <label>Название</label><br/>
                                <input type="text" id="filter_name" className="form-control"
                                       onChange={this.filterList}/>
                            </div>
                        </div>
                        <div className="col-xs-3">
                            <div className="form-group">
                                <label>Цвет</label><br/>
                                <input type="text" id="filter_color" className="form-control"
                                       onChange={this.filterList}/>
                            </div>
                        </div>
                        <div className="col-xs-3">
                            <div className="form-group">
                                <label>Номер</label><br/>
                                <input type="text" id="filter_number" className="form-control"
                                       onChange={this.filterList}/>
                            </div>
                        </div>
                        <div className="col-xs-1">
                            <div className="form-group">
                                <label>Активные</label><br/>
                                <input type="checkbox" id="filter_archive" value="1" className="checkbox"
                                       onChange={this.filterList}/>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state && this.state.items &&
                <div className="panel panel-info">

                    <div className="panel-body">
                        {this.state.items.map((item, index) =>
                            <div key={'cart-' + item.id} className="col-xs-3 text-center">
                                <p>
                                    <a href="#">№{item.position}, {item.title}<br/>{item.color}</a><br/>
                                    <input key={'cart-item-' + item.id} type="checkbox" value="1" checked={item.active}
                                           onChange={this.changeStatus.bind(this, item.id)}/>
                                </p>
                            </div>
                        )
                        }
                        {
                            this.state.items.length == 0 &&
                            <div className="text-center">Список пуст</div>
                        }
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
        return <div>
            <LeftBlock main_list={this.props.main_list} getContentActions={this.props.getContentActions}/>
            <CenterBlock content={this.props.content} updateCards={this.props.updateCards}/>
        </div>
    }
}


export default connect(
    state => ({
        main_list: state.main.main_list,
        content: state.content
    }),
    dispatch => ({
        getMainListActions: () => {
            dispatch(getMainList());
        },
        getContentActions: (menu_id) => {
            dispatch(getContent(menu_id));
        },
        updateCards: (list)=> {
            dispatch(updateCards(list));
        }
    })
)(App);
