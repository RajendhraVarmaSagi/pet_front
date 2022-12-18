import React, {useState} from 'react';
export default function({color}) {
    const style = {
        backgroundColor: color
    }

    return <div
        className='color-box'
        style={style}
    />
}