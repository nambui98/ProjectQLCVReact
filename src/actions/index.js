//action khi người dùng thực hiện gì đó
import * as types from './../constants/ActionTypes'
export const listAll=()=>{
    return{
        type:types.LIST_ALL
    }
}
export const addTask=(task)=>{
    return{
        type:types.ADD_TASK,
        task
    }
}
export const toggleForm=()=>{
    return{
        type:types.TOGGLE_FORM
    }
}
export const openForm=()=>{
    return{
        type:types.OPEN_FORM
    }
}
export const closeForm=()=>{
    return{
        type:types.CLOSE_FORM
    }
}
export const updateStatus=(id)=>{
    return{
        type:types.UPDATE_STATUS_TASK,
        id
    }
}
export const deleteTask=(id)=>{
    return{
        type:types.DELETE_TASK,
        id //id:id
    }
}
export const editTask=(task)=>{
    return{
        type:types.EDIT_TASK,
        task
    }
}
export const filterTask=(filter)=>{
    return{
        type:types.FILTER_TABLE,
        filter//filter:name,status
    }
}
export const searchTask=(keyWord)=>{
    return{
        type:types.SEARCH_TASK,
        keyWord
    }
}
export const sortTask=(sort)=>{
    return{
        type:types.SORT_TASK,
        sort
    }
}