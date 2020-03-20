import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  
import * as serviceWorker from './serviceWorker';
import StudentComp from './StudentComp';
import Example1 from './Example1';
//import MyName from './MyName';
//import Login from './Login'; 
import ContentEx1 from './ContentEx1';
import ClickCounter from './ClickCounter';
//import Register from './Register';
import Sum from './Ex1';





const studentData={
    StudentId:1234,
    StudentName:'Eshwar',
    StudentGrade:'10',
    Location:'NY',
    Age:22,
    FatherName:'KCM',
    password:"tst", email:"swati@fgh.com"
};
 

//ReactDOM.render(<StudentComp s={studentData}/>, document.getElementById('root'));
//ReactDOM.render(<h1> Hello world </h1>, document.getElementById('root'));

ReactDOM.render(<Sum a={'a'} b={2} />, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
