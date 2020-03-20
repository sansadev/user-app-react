import * as React from  'react';
import MyEmail from './MyEmail';
export default function MyPassword(props)
{
    return(
        <div>
            <h2>{props.password}</h2>
            <MyEmail email={props.email}/>
        </div>
    );
}