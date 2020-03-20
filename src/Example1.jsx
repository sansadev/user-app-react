import * as React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';

// class Example1 extends React.Component
// {
//     render()
//     {
//        // return(<h1>Mobile number from Class component is 333222333</h1>);
//     return(React.createElement('h1',{className:'exclass', Name:'tst'},'testing'));
//     }
// }
// export default Example1;


function Hello(props) {
    return <h1> Hello at {props.now}</h1>
}

ReactDOM.render(<Hello now={new Date().toISOString()} />, document.getElementById('root')
);