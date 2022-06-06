import { Alert } from 'bootstrap';
import React, { Component } from 'react';
import ReactDOM  from 'react-dom';

class RenderDom extends Component {


        myFun(){
            var container = document.getElementById("myId");
            var element = <h1>My Name Is Pranto from ReactDom</h1>
            var callback = function(){
                alert("Hi I am Callback");
            }
            ReactDOM.render(element,container,callback);
        }

       

    render() {
        return (
            <div>
                <button className='btn btn-primary m-2' onClick={this.myFun}>Click Me</button>
                <h1 id='myId'>My Name Is Marfat</h1>
            </div>
        );
    }
}

export default RenderDom;