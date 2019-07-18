import {createStore} from 'redux';
import {status,sort} from './actions/index'
import myReducer from './reducers/index'


const store=createStore(myReducer);
console.log("Default:",store.getState())
//thực hiện công việc thay đổi status

store.dispatch(status())
console.log("Toggle_status:",store.getState())
//thực hiện công việc sắp xếp từ Z-A

store.dispatch(sort({
    by:"name",
    value:-1
}))
console.log('Sort',store.getState())