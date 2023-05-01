import axios from "axios";
const url = 'http://localhost:4000';

//Register
export const register = (formdata)=>async(dispatch)=>{
    try {
        dispatch({type:'registerRequest'});
        const {data} = await axios.post(`${url}/api/signup`,formdata,{
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true,
        });
        dispatch({type:'registerSuccess',payload:data})
    } catch (error) {
            dispatch({type:'registerFail',payload:error.response.data.message});
    }
};
//Login
export const login = (email)=>async(dispatch)=>{
    try {
        dispatch({type:'loginRequest'});
        const {data} = await axios.post(`${url}/api/login`,{email},{
            headers:{
                'Content-Type':'application/json'
            },
        });
        dispatch({type:'loginSuccess',payload:data})
    } catch (error) {
            
            dispatch({type:'loginFail',payload:error.response.data.message});
    }
};
//GetUser
export const getUser = () =>async(dispatch)=>{
try {
    dispatch({type:'loadUserRequest'});
    const {data} = await axios.get(`${url}/api/me`,
   );
    dispatch({type:'loadUserSuccess',payload:data.user});
} catch (error) {
    dispatch({type:'loadUserFail',payload:error.response.data.message});
}
};
//Logout
export const logout = () =>async(dispatch)=>{
try {
    dispatch({type:'logoutRequest'});
    const {data} = await axios.get(`${url}/api/logout`,
    {
        withCredentials:true,
    });
    dispatch({type:'logoutSuccess',payload:data.user});
} catch (error) {
    dispatch({type:'logoutFail',payload:error.response.data.message});
}
};

//Update
export const updateUser = (name,email)=>async(dispatch)=>{
    try {
        dispatch({type:'updateUserRequest'});
        const {data} =await axios.put(`${url}/api/admin/user`,
        {email,name},
        {
            headers:{
                'Content-Type':'application/json'
            },withCredentials:true,
        });
        dispatch({type:'updateUserSuccess',payload:data.user});
    } catch (error) {
        dispatch({type:'updateUserFail',payload:error.response.data.message});
    }
};

//Delete
export const deleteUser = ()=>async(dispatch)=>{
    try {
        dispatch({type:'deleteUserRequest'});
        const {data} =await axios.delete(`${url}/api/admin/user`,
        {
           withCredentials:true,
        });
        dispatch({type:'deleteUserSuccess',payload:data});
    } catch (error) {
        dispatch({type:'deleteUserFail',payload:error.response.data.message});
    }
};



