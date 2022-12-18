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
            const {data: response} = await axios.get('/stuff/to/fetch');
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