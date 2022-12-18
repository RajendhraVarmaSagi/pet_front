import React, {useState} from 'react';
import EditableUserProfile from './EditableUserProfile';
// import Userprofile from './UserProfile'
import './style.css'
import {useNavigate} from 'react-router-dom';

function RegistrationForm() {
    const [UserName, setUserName] = useState(null);
    const [DisplayName, setDisplayName] = useState(null);
    const [Dateofbirth, setDateofbirth] = useState(null);
    const [Address, setAddress] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const navigate = useNavigate();

    function inputtypehandler(event){
        let{id,value}=event.target
        console.log(id,value)
        if(id=="id"){
            setUserName(value)
        }
        else if(id=="DisplayName"){
            setDisplayName(value)
        }
        else if(id=="Dateofbirth"){
            setDateofbirth(value)
        }
        else if(id=="Address"){
            setAddress(value)
        }
        else if(id=="email"){
            setEmail(value)
        }
        else if(id=="password"){
            setPassword(value)
        }
        else if(id=="confirmPassword"){
            setConfirmPassword(value)
        }
    }
    function register(event){
        console.log(UserName)
        console.log(DisplayName)
        console.log(Dateofbirth)
        console.log(Address)
        console.log(email)
        console.log(password)
        console.log(confirmPassword)
        if(password != confirmPassword)
        alert('not same password')
        else
        navigate('/', {replace: true});
        }
    return(
      <div className="form">
        <h1>hi</h1>
          <div className="form-body">
              <div className="UserName">
                  <label className="form__label" for="id">User Name </label>
                  <input onChange={inputtypehandler} className="form__input" type="text" id="id" placeholder="Username"/>
              </div>
              <div className="DisplayName">
                  <label className="form__label" for="DisplayName">Display name </label>
                  <input  onChange={inputtypehandler} type="text" name="" id="DisplayName"  className="form__input"placeholder="DisplayName"/>
              </div>
              <div className="Dateofbirth">
                <label className="form__label" for="Dateofbirth">Date of Birth</label>
                <input onChange={inputtypehandler} type="date" id="Dateofbirth" name="" className="form__input" min="1900-01-01" max="2022-12-31"></input>
              </div>
              <div className="Address">
                  <label className="form__label" for="Address">Address </label>
                  <input onChange={inputtypehandler} type="address" id="Address" className="form__input" placeholder="Address"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input onChange={inputtypehandler} type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input onChange={inputtypehandler} className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input onChange={inputtypehandler} className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
              <button onClick={register} type="submit" class="btn">Register</button>

          </div>
      </div> 
 
    )       
}
export default RegistrationForm;