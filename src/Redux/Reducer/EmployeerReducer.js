import {createReducer} from '@reduxjs/toolkit';


export const employeerReducer = createReducer({Employee:[]},{
    getAllUsersRequest:(state)=>{
        state.loading = true;
    },
    getAllUsersSuccess:(state,action)=>{
        state.loading = false;
        state.isAuthenticated= true;
        state.user = action.payload.user;
        state.message = action.payload.message;
    },
    getAllUsersFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload.error;
    },
});