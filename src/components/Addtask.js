import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index'

class Addtask extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id:'',
            txtName:'',
            slStatus:false
        }
        this.onHandleChange=this.onHandleChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    onHandleChange(event){
        var target=event.target;
        var name=target.name;
        var value=target.type==='select-one'?(target.value==='true'?true:false):target.value;
        this.setState({
            [name]:value
        })
}
    onSubmit(event){
        event.preventDefault();
        this.props.onAddTask(this.state)
        this.props.onCloseForm()
        this.onClear()
    }
    onClear=()=>{
        this.setState({
            txtName:'',
            slStatus:true
        })
    }
    // khi xuất hiện sẽ cập nhật 1 lần
    componentWillMount(){
        if(this.props.itemEditing && this.props.itemEditing.id !==''){
            this.setState({
                id:this.props.itemEditing.id,
                txtName:this.props.itemEditing.txtName,
                slStatus:this.props.itemEditing.slStatus
            })
            
        }
        else{
            this.onClear()
        }
    }
    // khi đã xuất hiện muốn cập nhật thì dùng này
    componentWillReceiveProps(nextProps){
        if(nextProps&&nextProps.itemEditing){
            this.setState({
                id:nextProps.itemEditing.id,
                txtName:nextProps.itemEditing.txtName,
                slStatus:nextProps.itemEditing.slStatus
            })
        }
        else{
            this.onClear()
        }
    }
    render(){
        if(!this.props.isDisplayForm) {return null}
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 
                            className="panel-title">
                            {this.state.id?'Cập nhật công việc':'Thêm công việc'}
                            <span className="fas fa-times-circle text-right" 
                            onClick={this.props.onCloseForm}
                        /></h3>
                    </div>
                    <div className="panel-body">
                        
                        <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên:</label>
                            <input 
                                type="text" 
                                onChange={this.onHandleChange} 
                                name="txtName"
                                value={this.state.txtName} 
                                className="form-control"/>
                        </div>
                        <label>Trạng thái:</label>
                        <select 
                            name="slStatus" 
                            className="form-control" 
                            onChange={this.onHandleChange}
                            value={this.state.slStatus}
                            >
                            <option value={false}>Ẩn</option>
                            <option value={true}>Kích hoạt</option>
                        </select>
                        <br/>
                        <div className="text-center">
                        <button type="submit" className="btn btn-warning"><i className="fas fa-plus"></i>Lưu Lại</button>&nbsp;
                        
                        <button type="button" className="btn btn-danger" onClick={this.onClear}><i className="fas fa-times"></i>Hủy bỏ</button>
                        </div>
                        </form>
                        
                    </div>
                </div>
                
            </div>
        );
    }
    
}
const mapStateToProps=state=>{
    return{
        isDisplayForm:state.isDisplayForm,
        itemEditing:state.itemEditing
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        onAddTask:(task)=>{
            dispatch(actions.addTask(task));
        },
        onCloseForm:()=>{
            dispatch(actions.closeForm())
        },
        onOpenForm:()=>{
            dispatch(actions.openForm())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Addtask);
