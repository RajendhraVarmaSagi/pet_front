import { useState, useEffect } from 'react';
import Group from './Group';
import { months, calcButtonTextColor } from '../tools';
import React, { Component } from 'react';

// function renderMonthOptions() {
//     return months.getMonths().map( (m, i) => {
//         return <option
//             key={i}
//             value={i}
//         >
//             {m.shortName}
//         </option>
//     });
// }

// function bound(value, floor, ceil) {
//     return Math.min(ceil, Math.max(value, floor));
// }

export default function EditableUserProfile({
    stored,
    editCompleteCallback
}) {

    console.log("Edit User Profile");

    const [UserName, setUserName] = useState(stored.id);
    const [DisplayName, setDisplayName] =useState(stored.DisplayName)
    const [Dateofbirth, setDateofbirth] =useState(stored.Dateofbirth)
    const [Address, setAddress] = useState(stored.Address);
    // const [email, setEmail] = useState(stored.email);
    // const [month, setMonth] = useState(stored.month);
    // const [day, setDay] = useState(stored.day);
    // const [color, setColor] = useState(stored.color);

    // const maxDay = months.getMaxDays(month);

    function handleCancelClicked() {
        editCompleteCallback(null);
    }

    function handleSaveClicked() {
        console.log("Saved");
        // editCompleteCallback({name, month, day, color});
        editCompleteCallback({DisplayName, Dateofbirth, Address});
    }

    // useEffect(() => {
    //     setDay(bound(day, 1, maxDay));
    // }, [month]);

    // const buttonStyle = {
    //     backgroundColor: color,
    //     color: calcButtonTextColor(color)
    // };

    // calcButtonTextColor(color);

    return <>
        
        <Group>            
            <h2>DisplayName:</h2>
            <input
                type='text'
                value={DisplayName}
                onChange={e => setAddress(e.target.value)}
            />            
        </Group>
        <Group>            
            <h2>Address:</h2>
            <input
                type='text'
                value={Address}
                onChange={e => setAddress(e.target.value)}
            />            
        </Group>
        <Group>            
            <h2>Dateofbirth:</h2>            
            
            {/* <select
                value={month}
                onChange={e => setMonth(bound(e.target.value, 0, 11))}
            >
                {renderMonthOptions()}
            </select> */}
            {/* <input
                type='number'
                value={day}
                onChange={e => setDay(bound(e.target.value, 1, maxDay))}
                style={{width: "50px"}} */}
            {/* /> */}
        </Group>
        {/* <Group>            
            <h2>Email:</h2>
            <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </Group> */}
        <Group>
             <button onClick={handleSaveClicked}>Save</button>
             <button onClick={handleCancelClicked}>Cancel</button>  
               

            <button onClick={handleSaveClicked}>Save</button>
            <button onClick={handleCancelClicked}>Cancel</button>
        </Group>
    </>
}