import { createReducer } from "@reduxjs/toolkit";

export const employeeReducer = createReducer({},{
    registerRequest:(state)=>{
        state.loading= true;
    },
    registerSuccess:(state,action)=>{
        state.loading=false
        state.isAuthenticated=true;
        state.user=action.payload.user;
        state.message=action.payload.message;
    },
    registerFail:(state,action)=>{
        state.loading=false
        state.isAuthenticated=false;
        state.error=action.payload;
    },
    loginRequest:(state)=>{
        state.loading= true;
    },
    loginSuccess:(state,action)=>{
        state.loading=false
        state.isAuthenticated=true;
        state.user=action.payload.user;
        state.message=action.payload.message;
    },
    loginFail:(state,action)=>{
        state.loading=false
        state.isAuthenticated=false;
        state.error=action.payload;
    },
    
    loadUserRequest:(state)=>{
        state.loading = true;
    },
    loadUserSuccess:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
    },
    loadUserFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },
    
    logoutRequest:(state)=>{
        state.loading = true;
    },
    logoutSuccess:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.user =null;
        state.message = action.payload.message;
    },
    logoutFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload.error;
    },
    
    deleteUserRequest:(state)=>{
        state.loading = true;
    },
    deleteUserSuccess:(state,action)=>{
        state.loading = false;
        state.message = action.payload.message;
    },
    deleteUserFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    
    updateUserRequest:(state)=>{
        state.loading = true;
    },
    updateUserSuccess:(state,action)=>{
        state.loading = false;
        state.message = action.payload.message;
    },
    updateUserFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    
    
    clearError:(state)=>{
        state.error = null;
    },
    clearMessage:(state)=>{
        state.message = null;
    },


});