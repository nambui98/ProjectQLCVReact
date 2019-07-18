import React from 'react';
import './App.css';
//connect Redux
import {connect} from 'react-redux';
import * as actions from './actions/index';

import Addtask from './components/Addtask';
import Listtask from './components/Listtask'
import TaskControl from './components/TaskControl'

class App extends React.Component {
  onToggleForm=()=>{
    if(this.props.itemEditing && this.props.itemEditing.id){
      this.props.onClose()
    }
    this.props.onToggleForm();
    this.props.onClearTask({
      id:'',
      txtName:'',
      slStatus:false
    })
  }
  render(){
    var {isDisplayForm}=this.props
    return (
      <div className="container">
        
        <div className="row text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr/>
        </div>
        
        <div className="row">
          <Addtask/>
          <div className={isDisplayForm?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button" className="btn btn-primary" onClick={this.onToggleForm}><i className="fas fa-plus"></i>Thêm công việc</button>
            {/* Search-Sort */}
            <TaskControl />
            {/* List */}
            <Listtask />
          </div>
        </div>
        
      </div>
    );
  }
  
}
const mapStateToProps=state=>{
  return{
    isDisplayForm:state.isDisplayForm,
    itemEditing:state.itemEditing,
    filterTable:state.filterTable
  }
}
const mapDispatchToProps=(dispatch,props)=>{
  return {
    onToggleForm:()=>{
      dispatch(actions.toggleForm())
    },
    onClearTask:(task)=>{
      dispatch(actions.editTask(task));
    },
    onClose:()=>{
      dispatch(actions.closeForm())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
