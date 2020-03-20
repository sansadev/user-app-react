import React from 'react';

export default function MyName1(props)
{
    return(
        <div>
        <h1>My Name from Input is {props.nameval}</h1>
        <h2>{props.age}</h2>
        <h2>{props.sal}</h2>
        <h2>{props.location}</h2>
        </div>
    );
}