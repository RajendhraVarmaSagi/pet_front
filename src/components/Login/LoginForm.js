import React, {useState, useEffect} from 'react';
//import EditableUserProfile from './EditableUserProfile';
// import Userprofile from './UserProfile'
//import './components/style.css'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Logins from './Logins';


function LoginForm() {
    const [UserName, setUserName] = useState(null);
    const [password,setPassword] = useState(null);
    const navigate = useNavigate();
    const [current_user_data, set_current_user_data] = useState({});

    function inputtypehandler(event){
        let{id,value}=event.target
        console.log(id,value)
        if(id=="id"){
            setUserName(value)
        }
        else if(id=="password"){
            setPassword(value)
        }
     }
    async function logins(event){
        console.log(UserName)
        console.log(password)
        
        
                  try {
                    
                    const param_data=new URLSearchParams()
                    param_data.append('username', UserName)
                    param_data.append('password', password)
                    console.log(param_data)
                    const {data}= await axios.post('https://2976-2601-441-4200-d9a0-10da-6d62-ae9a-4d95.ngrok.io/auth/login',param_data);
                    localStorage.setItem('auth_token', data.access_token);
                    //localStorage.setItem(key, value);
                    console.log(data)
                    
                  } catch (error) {
                    console.error(error.message);
                  }
        navigate('/', {replace: true});
        
        }
    return(
      <div className="form">
        <h1>Login</h1>
          <div className="form-body">
              <div className="UserName">
                  <label className="form__label" for="id">User Name </label>
                  <input onChange={inputtypehandler} className="form__input" type="text" id="id" placeholder="Username"/>
              </div>
              
                  
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input onChange={inputtypehandler} className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              
          </div>
          <div class="footer">
              <button onClick={logins} type="submit" class="btn">Login</button>

          </div>
      </div> 
 
    )       
}
export default LoginForm;