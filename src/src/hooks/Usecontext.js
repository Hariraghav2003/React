import React from 'react'
import { useContext,useState,createContext } from 'react'
const Contextex=createContext();
function User() {
  const user=useState('Hari');
  return (

    <Contextex.Provider value={user}>
     
        <Component5></Component5>
        <Component1></Component1>
    </Contextex.Provider>
  );
}
function Component1 (){
  return(
    <div>
      <h4>Hello</h4>
    <Component2></Component2>
    </div>
  )
}
function Component2 (){
  return(
    <div>
      <h4>Hello</h4>
      <Component3></Component3>
    </div>
  )
}
function Component3 (){
  return(
    <div>
      <h4>Hello</h4>
      <Component4></Component4>
    </div>
  )
}
function Component4 (){
  return(
    <div>
      <h4>Hello</h4>
      <Component5></Component5>
    </div>
  )
}
function Component5(){
    const username=useContext(Contextex);
    return (
        <div>
            <h1>Welcome {username}</h1>
        </div>
      
    )
}
export default User