import React, { Component } from "react";

class SetState extends Component{

    constructor(){
        super()
        this.state={
            name:"Marfat"
        }
    }
    changeName(a){
        this.setState({name:a})
    }


    render(){
        return <div>
            {/* <h1>{this.state.name}</h1> */}
            <button className="btn btn-primary" onClick={this.changeName.bind(this,"Maruf")}>{this.state.name}</button>

        </div>
    }

}

export default SetState;

