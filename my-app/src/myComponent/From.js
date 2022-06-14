import React, { Component } from 'react';


class From extends Component {

    constructor(){
        super()
        this.state = {
            firstname: " ",
            lastname: " ",
            email: " ",
            mobile: " "
        }
    
    }

    onChangeHandler=(event)=>{
        var myName=event.target.name;
        var myValue=event.target.value
        this.setState({[myName]:[myValue]})


        if(myName==="firstname"){
            var namePattern = /^([a-zA-Z ]){2,30}$/;
            if(!namePattern.test(myValue)){
                this.setState({firstname: "Invalid"})
            }
        }

        if(myName==="lastname"){
            var namePattern = /^([a-zA-Z ]){2,30}$/;
            if(!namePattern.test(myValue)){
                this.setState({lastname: "Invalid"})
            }
        }

        if(myName==="email"){
            var emailPattern = /\S+@\S+\.\S+/;
            if(! emailPattern.test(myValue)){
                this.setState({email: "Invalid"})
            }
        }

        if(myName==="mobile"){
            
            if(!Number(myValue)){
                this.setState({mobile: "Invalid"})
            }
        }

    }

    onSubmitHandler=()=>{
        alert(this.state.username)
    }



    render() {
        return (
            <div >
                <form onSubmit={this.state.onSubmitHandler}>
                    
                    <h3>First From</h3>
                    <h4>First Name: {this.state.firstname}</h4>
                    <h4>Last Name: {this.state.lastname}</h4>
                    <h4>Email: {this.state.email}</h4>
                    <h4>Mobile NO: {this.state.mobile}</h4>
                    <h4>Message: {this.state.message}</h4>
                                                                        
                        <input name="firstname" onChange={this.onChangeHandler} type="text" placeholder="First Name"></input><br></br>
                        <input name="lastname" onChange={this.onChangeHandler} type="text" placeholder="Last Name"></input><br></br>
                        <input name="email" onChange={this.onChangeHandler} type="text" placeholder="Email"></input><br></br>
                        <input name="mobile" onChange={this.onChangeHandler} type="text" placeholder="Mobile No"></input><br></br>
                        <textarea name="message" onChange={this.onChangeHandler} type="text" placeholder="Yor Message"/><br></br>
                        <input type="submit" value="Submit Now" ></input>
                        
                   
                </form>
            </div>
        );
    }
}

export default From;