import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import Admin from './Components/Admin/Admin';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import {Toaster, toast} from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {ProtectedRoute} from 'protected-route-react'
import { getUser } from './Redux/Action/Employee';

function App() {
  const dispatch = useDispatch();
  const {user,isAuthenticated,message,error} = useSelector((state)=>state.employee);
  
  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type:'clearError'});
    }
    if(message){
      toast.success(message);
      dispatch({type:'clearMessage'});
    }
  },[dispatch,error,message]);

  
  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} user={user}/>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home user={user}/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      <Toaster/>
    </Router>
  );
}

export default App;
