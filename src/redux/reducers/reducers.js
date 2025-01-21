import { combineReducers } from 'redux';
import  authReducers from '@/redux/reducers/authReducers'

const rootReducer = combineReducers({
    auth: authReducers
});

export default rootReducer;