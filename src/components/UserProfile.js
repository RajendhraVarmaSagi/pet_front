import React, {useState, useEffect} from 'react';
import Group from './Group';
import ColorBox from './ColorBox';
import { months, calcButtonTextColor } from '../tools';
import axios from 'axios'

export default function UserProfile({
    stored,
    startEditCallback
}) {

    const [Userprofiledata, setUserProfile] = useState({});
    console.log()

    // const buttonStyle = {
    //     backgroundColor: stored.color,
    //     color: calcButtonTextColor(stored.color)
    // };

    useEffect(() => {
        const fetchData = async () =>{
        //   setLoading(true);
          try {
            const {data: response} = await axios.get('https://95c7-2601-441-4200-d9a0-d4cb-4754-283e-c57f.ngrok.io/profile/');
            // URL updation
            setUserProfile(response[0]);
            console.log(response[0]);
          } catch (error) {
            console.error(error.message);
          }
        //   setLoading(false);
        }
    
        fetchData();
      }, []);
    

    return <div>
        <Group>
            <h2>Name:</h2> {Userprofiledata._id}
        </Group>
        <Group>
            <h2>UserName:</h2>{Userprofiledata.displayName}
        </Group>
        <Group>
            <h2>Dateofbirth:{Userprofiledata.dateOfBirth}</h2>
        </Group>
        <Group>
            <h2>Address:</h2> {Userprofiledata.address}
        </Group>
        <Group>
            <h2>Email:</h2> {Userprofiledata.email}
        </Group>
        <Group>
            <h2>Followers:</h2>
        </Group>
        <Group>
            <h2>Following:</h2>
        </Group>
        <Group>
            <button
                // style={buttonStyle}
                // onClick={startEditCallback}
            >Edit</button>
        </Group>
    </div>
}