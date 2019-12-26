import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import projectReducer from './reducers/projectReducer';

const rootReducer = combineReducers({
    project: projectReducer,
    auth: authReducer
})

export default rootReducer;