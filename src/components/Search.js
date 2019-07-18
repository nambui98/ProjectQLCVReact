import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
        }
    }
    onChange=(event)=>{
        var value=event.target.value
        this.setState({
            name:value
        })
    }
    onClick=()=>{
        
        this.props.onSearchTask(this.state.name)
    }
    render()
    {
        var {name}=this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    
                    <input 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        onChange={this.onChange}
                        value={name} />
                    
                    <span className="input-group-btn">
                    <button type="button" className="btn btn-primary" onClick={this.onClick}><i className="fas fa-search"></i>Tìm</button>
                    </span>
                    
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        onSearchTask:(keyWord)=>{
            dispatch(actions.searchTask(keyWord))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Search);