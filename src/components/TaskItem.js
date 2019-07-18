import React from 'react';

import {connect} from "react-redux";
import * as actions from '../actions/index';

class TaskItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            txtName:'',
            slStatus:0
        }
        this.onEdit=this.onEdit.bind(this)
        this.onChangeStt=this.onChangeStt.bind(this)
    }
    onEdit(){
        this.props.onOpenForm()
        this.props.onEdit(this.props.list);
    }
    onChangeStt(){
        this.props.onUpdateStatus(this.props.list.id)
    }
    onDelete=()=>{
        this.props.onDelete(this.props.list.id);
        this.props.onCloseForm()
    }
    render()
    {
        return (
            <tr>
                <td>{this.props.index+1}</td>
                <td>{this.props.list.txtName}</td>
                <td className="text-center">
                    {this.props.list.slStatus===false
                        ?<span 
                            className="label label-info" 
                            onClick={this.onChangeStt}>Ẩn</span>
                        :<span 
                            className="label label-danger" 
                            onClick={this.onChangeStt}>Kích hoạt</span>}
                </td>
                <td className="text-center">
                    
                    <button type="button" className="btn btn-warning" onClick={this.onEdit}><i className="fa fa-pen mr-5"/>Sửa</button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}><i className="fa fa-trash mr-5"/>Xóa</button>
                </td>
            </tr>
        );
    }
}
const mapStateToProps=state=>{
    return{

    };
    }
const mapDispatchToProps=(dispatch,props)=>{
    return {
        onUpdateStatus:(id)=>{
            dispatch(actions.updateStatus(id));
        },
        onDelete:(id)=>{
            dispatch(actions.deleteTask(id))
        },
        onCloseForm:()=>{
            dispatch(actions.closeForm())
        },
        onEdit:(task)=>{
            dispatch(actions.editTask(task))
        },
        onOpenForm:()=>{
            dispatch(actions.openForm())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (TaskItem);