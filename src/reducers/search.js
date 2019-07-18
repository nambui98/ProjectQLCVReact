import * as types from '../constants/ActionTypes'

var initialState='';

var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.SEARCH_TASK:
            return action.keyWord;
        default:return state;
    }
}
export default myReducer;