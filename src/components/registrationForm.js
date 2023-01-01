import React, { useState, useEffect } from "react";
import EditableUserProfile from "./EditableUserProfile";
// import Userprofile from './UserProfile'
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "validator";

function RegistrationForm({ isEdit, Userprofiledata, setIsEdit }) {
  const [UserName, setUserName] = useState(null);
  const [DisplayName, setDisplayName] = useState(null);
  const [Dateofbirth, setDateofbirth] = useState(null);
  const [Address, setAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const navigate = useNavigate();
  const [current_user_data, set_current_user_data] = useState({});
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (isEdit) {
      const { _id, displayName, dateOfBirth, address } = Userprofiledata;
      setUserName(_id);
      setDisplayName(displayName);
      setDateofbirth(dateOfBirth.substring(0, 10));
      setAddress(address);
    }
  }, [isEdit, Userprofiledata]);
  const validateEmail = (e) => {
    if (validator.isEmail(e)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  function inputtypehandler(event) {
    let { id, value } = event.target;
    console.log(id, value);
    if (id == "id") {
      setUserName(value);
    } else if (id == "DisplayName") {
      setDisplayName(value);
    } else if (id == "Dateofbirth") {
      setDateofbirth(value);
    } else if (id == "Address") {
      setAddress(value);
    } else if (id == "email") {
      setEmail(value);
      validateEmail(value);
    } else if (id == "password") {
      setPassword(value);
    } else if (id == "confirmPassword") {
      setConfirmPassword(value);
    }
  }
  async function formSubmit(event) {
    // console.log(UserName);
    // console.log(DisplayName);
    // console.log(Dateofbirth);
    // console.log(Address);
    // console.log(email);
    // console.log(password);
    // console.log(confirmPassword);
    if (!isEdit) {
      if (password != confirmPassword)
        alert(
          "Password not matching...Please check the password you have entered"
        );
      else if (emailError === "Enter valid Email!") alert("Enter Valid E-mail");
      else {
        try {
          const signup_response = await axios.post(
            "https://2976-2601-441-4200-d9a0-10da-6d62-ae9a-4d95.ngrok.io/auth/signup",
            { username: UserName, password: password }
          );
          const param_data = new URLSearchParams();
          param_data.append("username", UserName);
          param_data.append("password", password);
          console.log(param_data);
          const { data } = await axios.post(
            "https://2976-2601-441-4200-d9a0-10da-6d62-ae9a-4d95.ngrok.io/auth/login",
            param_data
          );
          console.log(data, new Date(Dateofbirth).toISOString());
          sessionStorage.setItem("auth_token", data.access_token);
          const create_profile_response = await axios.post(
            `https://2976-2601-441-4200-d9a0-10da-6d62-ae9a-4d95.ngrok.io/profile/${data.access_token}`,
            {
              uid: UserName,
              displayName: DisplayName,
              dateOfBirth: new Date(Dateofbirth).toISOString(),
              address: Address,
              petsList: [],
            }
          );
          // const create_profile_response= await axios.post('https://2c71-2601-441-4200-d9a0-e106-da45-a7de-c8c2.ngrok.io/profile/{token', {username:UserName, password:password});
          set_current_user_data(create_profile_response.data);
          alert("");
          console.log(create_profile_response);
          // Put the object into storage
          sessionStorage.setItem(
            "testObject",
            JSON.stringify(create_profile_response.data)
          );
          // URL updation
          console.log(signup_response, create_profile_response);
          // console.log(login_response);
          navigate("/login", { replace: true });
          alert("New user is created");
        } catch (error) {
          console.error(error.message);
          alert(error);
        }
      }
    } else {
      // Retrieve the object from storage
      var retrievedObject = sessionStorage.getItem('auth_token');
      // var retrievedObject = sessionStorage.getItem('testObject');
      const data = JSON.parse(sessionStorage.getItem("testObject"));
      console.log(data)
      const update_profile_response = await axios.put(
        `https://2976-2601-441-4200-d9a0-10da-6d62-ae9a-4d95.ngrok.io/profile/${data._id}/${retrievedObject}`,
        {
          // uid: UserName,
          displayName: DisplayName,
          dateOfBirth: new Date(Dateofbirth).toISOString(),
          address: Address,
          petsList: [],
        }
      );
      set_current_user_data(update_profile_response.data);
      alert("");
      console.log(update_profile_response);
      sessionStorage.setItem(
        "testObject",
        JSON.stringify(update_profile_response.data)
      );
      setIsEdit(false);
    }
  }
  return (
    <div className="form">
      <h1>New User Registration</h1>
      <div className="form-body">
        <div className="UserName">
          <label className="form__label" htmlFor="id">
            User Name{" "}
          </label>
          <input
            onChange={inputtypehandler}
            className="form__input"
            type="text"
            id="id"
            placeholder="Username"
            required
            value={UserName}
          />
        </div>
        <div className="DisplayName">
          <label className="form__label" htmlFor="DisplayName">
            Display name{" "}
          </label>
          <input
            onChange={inputtypehandler}
            type="text"
            name=""
            id="DisplayName"
            className="form__input"
            placeholder="DisplayName"
            required
            value={DisplayName}
          />
        </div>
        <div className="Dateofbirth">
          <label className="form__label" htmlFor="Dateofbirth">
            Date of Birth
          </label>
          <input
            onChange={inputtypehandler}
            type="date"
            id="Dateofbirth"
            name=""
            className="form__input"
            min="1900-01-01"
            max="2022-12-31"
            required
            value={Dateofbirth}
          />
        </div>
        <div className="Address">
          <label className="form__label" htmlFor="Address">
            Address{" "}
          </label>
          <input
            onChange={inputtypehandler}
            type="address"
            id="Address"
            className="form__input"
            placeholder="Address"
            value={Address}
          />
        </div>

        {!isEdit ? (
          <>
            <div className="email">
              <label className="form__label" htmlFor="email">
                Email{" "}
              </label>
              <input
                onChange={inputtypehandler}
                type="email"
                id="email"
                className="form__input"
                placeholder="Email"
                required
              />
            </div>

            <div className="password">
              <label className="form__label" htmlFor="password">
                Password{" "}
              </label>
              <input
                onChange={inputtypehandler}
                className="form__input"
                type="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="confirm-password">
              <label className="form__label" htmlFor="confirmPassword">
                Confirm Password{" "}
              </label>
              <input
                onChange={inputtypehandler}
                className="form__input"
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>
          </>
        ) : null}
      </div>
      <div className="footer">
        <button onClick={formSubmit} type="submit" className="btn">
          {isEdit ? "update" : "Register"}
        </button>
      </div>
    </div>
  );
}
export default RegistrationForm;
