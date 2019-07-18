import React from 'react';
import TaskItem from './TaskItem';
import {connect} from "react-redux";
import * as actions from '../actions/index';
import {filter} from 'lodash'

class Listtask extends React.Component {
    constructor(props){
        super(props);
        this.state={
            filterName:'',
            filterStatus:-1//all:-1, active:1, deactive:0
        }
    }
    onChange=(event)=>{
        var target=event.target;
        var name=target.name;
        var value=target.value;
        var filter={
            name:name==='filterName'?value:this.state.filterName,
            status:name==='filterStatus'?parseInt(value):this.state.filterStatus
        }
        this.props.onFilterTable(filter)
        this.setState({
            [name]:value
        })
        
    }
    render()
    {
        var {list,filterTable,keyWord,sort}=this.props
        if(filterTable.name){
            list=filter(list,(task)=>task.txtName.toLowerCase().indexOf(filterTable.name) !== -1)
        }
        if(filterTable.status ||filterTable.status===0){
            list=list.filter((task)=>{
            if(filterTable.status===-1){
                return task
            }
            else{
                return task.slStatus===(filterTable.status===1?true:false)
            }
            })
        }
        if(keyWord){
            list=filter(list,(task)=>task.txtName.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1)
        }
        if(sort){
            if(sort.by==="name"){
            list.sort((a,b)=>{
                if(a.txtName<b.txtName){return -sort.value}
                else if(a.txtName>b.txtName){return sort.value}
                else return 0
            })
            }
            else if(sort.by==="status"){
                list.sort((a,b)=>{
                    if(a.slStatus>b.slStatus){return -sort.value}
                    else if(a.slStatus<b.slStatus){return sort.value}
                    else return 0
                })
            }
        }
        var elements=list.map((task,index)=>{
            return <TaskItem 
                    key={index}
                    list={task} 
                    index={index} 
                    onEdit={this.props.onEdit} 
                    />
        })

        var {filterName,filterStatus}=this.state;
        return (
            <div className="row mt-5">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td>
                        <input 
                            type="text" 
                            name="filterName" 
                            id="input" 
                            className="form-control" 
                            value={filterName}
                            onChange={this.onChange}/>
                        </td>
                        <td>
                        
                        <select 
                            name="filterStatus" 
                            value={filterStatus} 
                            className="form-control"
                            onChange={this.onChange}>
                            <option value={-1}>Tất Cả</option>
                            <option value={0}>Ẩn</option>
                            <option value={1}>Kích hoạt</option>
                        </select>
                        
                        </td>
                        <td></td>
                    </tr>
                    {elements}
                    </tbody>
                </table>
                
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        list:state.tasks,
        filterTable:state.filterTable,
        keyWord:state.search,
        sort:state.sort
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        onFilterTable:(filter)=>{
            dispatch(actions.filterTask(filter))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Listtask);