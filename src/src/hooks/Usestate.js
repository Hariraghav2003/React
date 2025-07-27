import React from 'react'
import { useState ,useEffect } from 'react'
export default function Usestate() {
    const [count,setCount]=useState(0);
    const incrementCount=()=>{
        setCount(count+1);
    }
    const[input,setInputvalue]=useState(5)
    const countchange=(e)=>{
        setInputvalue(Number(e.target.value)*5);
    } 
    const resetCount=()=>{
        setCount(1);
    }  // This function will reset the count and input value to 0 when clicked.
    useEffect(() => {
      console.log("Runs when `count` changes");
    }, [count]);
    
  return (
    <div>
      <p>
        Usestate Hook is the most common hooks which helps to access state (UI coomponent);<br></br>
        <span>
            <b>Counter Increment:</b>
            count:{count}
        </span>
        <button onClick={incrementCount}>Increment</button> <br></br>
        <button onClick={resetCount}>Reset</button> <br></br>
        <label>Count:</label> &nbsp;
        <input type="text" onChange={countchange}></input>
        <p>Count in 5 times of input value: {input}</p>
      </p>
    </div>
  )
}
