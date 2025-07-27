import React, { useRef,useEffect } from 'react';

function Useref() {
    const spanRef = useRef(null); // This ref is used to directly manipulate the DOM element
    const count = useRef(0); // This ref is used to hold a mutable value

    const Counter = () => {
        count.current++; 
        if (spanRef.current) {
            spanRef.current.innerText = count.current; 
        }
    };
    useEffect(() => {
        console.log("Runs when `count` changes");
      }, [Counter]);

      
    return (
        <div>
            <button onClick={Counter}>
                Click me: <span ref={spanRef}>0</span>
            </button>
        </div>
    );
}

export default Useref;
