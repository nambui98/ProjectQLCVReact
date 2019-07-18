import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index'

class Sort extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            sort:{
                by:'name',
                value:1
            }
            
        }
    }
    
    onClick=(sortBy,sortValue)=>{
        var sort={
            by:sortBy,
            value:sortValue
        }
        this.setState({
            sort:{
                by:sortBy,
                value:sortValue
            }
        })
        this.props.onSort(sort)
    }
    render()
    {
        
        var {sort}=this.props;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Sắp Xếp
                <i className="fas fa-caret-square-down ml-5"></i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li onClick={()=>this.onClick('name',1)}><a href="# "
                    className={(sort.by==="name"&&sort.value===1)?'sort_selected':''}
                    ><i className="fa fa-sort-alpha-down mr-5"/>Tên A-Z</a></li>
                    <li onClick={()=>this.onClick('name',-1)}><a href="# "
                    className={(sort.by==="name"&&sort.value===-1)?'sort_selected':''}
                    ><i className="fa fa-sort-alpha-down-alt mr-5"/>Tên Z-A</a></li>
                    
                    <li role="separator" className="divider"></li>
                    <li onClick={()=>this.onClick('status',1)}><a href="# "
                    className={(sort.by==="status"&&sort.value===1)?'sort_selected':''}
                    >Trạng Thái Kích Hoạt</a></li>
                    <li onClick={()=>this.onClick('status',-1)}><a href="# "
                    className={(sort.by==="status"&&sort.value===-1)?'sort_selected':''}
                    >Trạng Thái Ẩn</a></li>
                </ul>
            </div>
            
            </div>
        )
    }
}
const myStateToProps=(state)=>{
    return{
        sort:state.sort
    }
}
const myDispatchToProps=(dispatch,props)=>{
    return{
        onSort:(sort)=>{
            dispatch(actions.sortTask(sort))
        }
    }
}

export default connect(myStateToProps,myDispatchToProps) (Sort);