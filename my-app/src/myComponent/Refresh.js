import React, { Component } from "react";


class Refresh extends Component{


    constructor(){
        super();
        this.refreshNow = this.refreshNow.bind(this);
    }


    refreshNow(){
        this.forceUpdate();
    }


render(){
    return (
    <div>
        <button className="btn btn-danger m-2" onClick={this.refreshNow}>Refresh Button</button>
        <h1>{Math.random()}</h1>
    </div>
    )
    
}

}

export default Refresh;


