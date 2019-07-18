import Randomstring from 'randomstring'
import * as types from './../constants/ActionTypes'
import {findIndex} from 'lodash'; 

var data=JSON.parse(localStorage.getItem("tasks"))
var initialState=data?data:[]

var myReducer=(state=initialState,action)=>{
    var id='';
    var index=-1;
    
    switch(action.type){
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            var task={
                id:action.task.id,
                txtName:action.task.txtName,
                slStatus:action.task.slStatus
            }
            if(!action.task.id){
                task.id=Randomstring.generate(7)
                state.push(task)
            }
            else{
                index=findIndex(state,(task)=>task.id===action.task.id);
                state[index]=task
            }
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS_TASK:
            
            id=action.id;
            index=findIndex(state,(task)=>task.id===id)
            state[index]={
                ...state[index],slStatus:!state[index].slStatus
            }
            //state[index].slStatus=!state[index].slStatus;
            localStorage.setItem('tasks',JSON.stringify(state))
            return[...state]
        case types.DELETE_TASK:
            id=action.id;
            index=findIndex(state,(task)=>task.id===id);
            state.splice(index,1);
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        default:return state;
    }
}
export default myReducer;