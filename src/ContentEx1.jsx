import * as React from 'react';
import ReactDOM from 'react-dom'; 



class ContentEx1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value:'This is for state testing'};
        
        this.clickpress=this.clickpress.bind(this);
    }
    clickpress(source)
    {
this.setState({value:source.target.value});
console.log(this.state.value);
    }
 
    render() {
        return (<div>
            <textarea value={this.state.value}
             onChange ={this.clickpress}/>
             
            </div>);
    }
   
}
    export default ContentEx1;
        