import React, { Component } from 'react';
import  ReactDOM  from 'react-dom'

class FindDom extends Component {


    myFun(){
        var component = document.getElementById("imgId");
        ReactDOM.findDOMNode(component).src= "https://matrixtelbd.com/assets/img/team/team-3.jpg"
    }


    render() {
        return (
            <div>
                <button className='btn btn-primary m-2' onClick={this.myFun}>Click Here</button><br></br>
                <img id="imgId" src='https://matrixtelbd.com/assets/img/team/team-1.jpg'></img>
            </div>
        );
    }
}

export default FindDom;