import React, { useState, useEffect } from "react";
import Group from "./Group";
import ColorBox from "./ColorBox";
import { months, calcButtonTextColor } from "../tools";
import axios from "axios";
import RegistrationForm from "./registrationForm";

export default function UserProfile({ stored, startEditCallback }) {
  const [Userprofiledata, setUserProfile] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("testObject"));
    setUserProfile(data);
  }, [sessionStorage.getItem("testObject")]);

  useEffect(() => {
    const fetchData = async () => {
      //   setLoading(true);
      try {
        const { data: response } = await axios.get(
          `https://2976-2601-441-4200-d9a0-10da-6d62-ae9a-4d95.ngrok.io/getFollowersList/${Userprofiledata._id}`
        );
        // URL updation
        setUserProfile(response[0]);
        console.log(response[0]);
      } catch (error) {
        console.error(error.message);
      }
      //   setLoading(false);
    };
    if (Userprofiledata && Userprofiledata._id) fetchData();
  }, [Userprofiledata]);

  return (
    <div>
      {!isEdit ? (
        <>
          <Group>
            {/* Name: {Userprofiledata._id} */}
            <div className="main">
              {" "}
              <div className="heading"> Name:</div>{" "}
              <div className="info"> {Userprofiledata._id} </div>{" "}
            </div>
          </Group>
          <Group>
            {/* <h2>UserName:</h2>{Userprofiledata.displayName} */}
            <div className="main">
              {" "}
              <div className="heading"> UserName:</div>{" "}
              <div className="info"> {Userprofiledata.displayName} </div>{" "}
            </div>
          </Group>
          <Group>
            {/* <h2>Dateofbirth:</h2>{Userprofiledata.dateOfBirth} */}
            <div className="main">
              {" "}
              <div className="heading"> Dateofbirth:</div>{" "}
              <div className="info"> {Userprofiledata.dateOfBirth} </div>{" "}
            </div>
          </Group>
          <Group>
            {/* <h2>Address:</h2> {Userprofiledata.address} */}
            <div className="main">
              {" "}
              <div className="heading"> Address:</div>{" "}
              <div className="info"> {Userprofiledata.address} </div>{" "}
            </div>
          </Group>

          <Group>
            <button
              className="button"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              Edit
            </button>
          </Group>
        </>
      ) : (
        <>
          <RegistrationForm
            isEdit={isEdit}
            Userprofiledata={Userprofiledata}
            setIsEdit={setIsEdit}
          />
        </>
      )}
    </div>
  );
}
