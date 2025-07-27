import React from 'react'
import { useMemo,useState } from 'react'
function Usememo() {
    const [arr]=useState([1,2,3,4,5]);
    function Usemax(){
        console.log("Array Chnaging");
        return Math.max(...arr);
    }
    const [count,setCount]=useState(0);
    const incrementCount=()=>{
        setCount(count+1);
    }
    const memo= useMemo(()=>Usemax(),[arr]);//This is the memoized value using Usememo hook where the function runs  only when the arr changes
  return (

    <div>
      <p>
        <p>{memo}</p>
        <button onClick={incrementCount}>Click me!</button>
        <p>{count}</p>
      </p>
    </div>
  )
}

export default Usememo
