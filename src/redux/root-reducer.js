import {combineReducers} from 'redux';
import studentReducer from './students/students.reducer';

export default combineReducers({
    students: studentReducer
});

