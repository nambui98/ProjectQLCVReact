import sort from './sort'
import status from './status'
import {combineReducers} from 'redux'

const myReducer=combineReducers({
    status,
    sort
})
export default myReducer;