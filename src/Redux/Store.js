import {configureStore} from '@reduxjs/toolkit';
import { employeeReducer } from './Reducer/EmployeeReducer';
import { employeerReducer } from './Reducer/EmployeerReducer';

const store = configureStore({
    reducer:{
        employee: employeeReducer,
        employeer:employeerReducer,
    },
});
export default store;