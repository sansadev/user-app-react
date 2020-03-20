import * as React from 'react'; 
export default function StudentComp(props)
{
    return(
        <div>
            <h3>{props.s.StudentName}</h3>
            <h3>{props.s.Location}</h3>
       
             <h3>{props.s.Age}</h3>
        </div>
    );
}
