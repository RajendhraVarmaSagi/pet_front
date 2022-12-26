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
            const {data: response} = await axios.get('https://2c71-2601-441-4200-d9a0-e106-da45-a7de-c8c2.ngrok.io/profile/');
            // URL updation
            setUserProfile(response);
          } catch (error) {
            console.error(error.message);
          }
        //   setLoading(false);
        }
    
        fetchData();
      }, []);
    

    return <div>
        <Group>
            <h2>Name:</h2>
        </Group>
        <Group>
            <h2>UserName:</h2>
        </Group>
        <Group>
            <h2>Dateofbirth:</h2>
        </Group>
        <Group>
            <h2>Address:</h2> 
        </Group>
        <Group>
            <h2>Email:</h2> 
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