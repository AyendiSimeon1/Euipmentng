import { combineReducers } from 'redux';
import  authReducers from '@/redux/reducers/authReducers'
import equipmentReducers from '@/redux/reducers/equipmentReducer'

const rootReducer = combineReducers({
    auth: authReducers,
    equipments: equipmentReducers
});

export default rootReducer;