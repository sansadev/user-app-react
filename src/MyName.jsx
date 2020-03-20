import * as React from 'react';
import MyPassword from './MyPassword';
import MyAge from './MyAge';





export default function MyName(props)
{
    return(
        <div>
        <h1>I am {props.nameprop.StudentId}</h1>
        <MyPassword password={props.nameprop.password}
         email={props.nameprop.email}/>
        <MyAge/>
        <h3>{props.nameprop.StudentName}</h3>
        </div>
    );
   
}

