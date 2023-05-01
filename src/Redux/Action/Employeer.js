import axios from "axios";
const url = 'http://localhost:4000';

export const getAllUser =(keyword)=>async(dispatch)=>{
    try {
        dispatch({type:'getAllUsersRequest'});
        const {data} = await axios.get(`${url}/api/admin/users?keyword=${keyword}`);
        dispatch({type:'getAllUsersSuccess',payload:data.employee});
    } catch (error) {
        dispatch({type:'getAllUsersFail',payload:error.response.data.message});
    }
};
