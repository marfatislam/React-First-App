import React from "react";

const AlertMe=(a)=>{ alert(a); }
const Arrow=()=>{return(<button onClick={AlertMe.bind(this," I am")} className="btn btn-danger">Arrow Button</button>)}

export default Arrow;