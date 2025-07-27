import React from "react";

class Mounting extends React.Component{
 constructor(props){
    super(props);
    this.state={color:"Red"};
 }
 componentDidMount(){
    document.getElementById("two").innerHTML="Component Mounted";
    this.setState({color:"Blue"});
 }
 componentDidUpdate(prevState, prevProps){
   console.log("Previous Props:"+prevProps.color);
   console.log("Previous State:"+prevState.color);
   if (prevState.color === "Blue") {
    document.getElementById("two").innerHTML="Component Updated";
    this.setState({color:"Green"});
   }
 }
 render(){
    return(
        <div>
        <h5>Example for Class Component Phase 1</h5>
        <div id="two"></div>
        <div>{this.state.color}</div>
        </div>

    );

 }

 }
export default Mounting
