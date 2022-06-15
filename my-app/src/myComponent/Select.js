import React, { Component } from 'react';

class Select extends Component {

    constructor(){
        super();
        this.state={
            city1:"Dhaka",
            city2:"Rajshahi",
            city3:"Barishal",
            city4:"khulna",
            show: " ",
            auto:"Rajshahi"
        }
    }

    
    onchangeHandler=(event)=>{
        var SelectedValue=event.target.value;
        this.setState({show:SelectedValue, auto:SelectedValue})

    }


    render() {
        return (
            <div>
                <h2>{this.state.show}</h2>
                <select onChange={this.onchangeHandler} value={this.state.auto}>
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                </select>
            </div>
        );
    }
}

export default Select;