import * as React from 'react';
import ReactDOM from 'react-dom'; 



class  ClickCounter extends  React.Component
{
    constructor(props)
    {
        super(props);
        this.handleClick1=this.handleClick1.bind(this);  
     }
    handleClick
     = () =>{
        console.log('this is click method');
    }
    handleClick1(){
        console.log('this is click method 1');
    }
    render(){
        return(<button onClick={this.handleClick}>click</button>);      
}
}


export default ClickCounter;