import React from "react";
import Useeffect from "../hooks/Useeffect";
function Reactd5() {
  return (
    <div>
      <h1>React Day 5</h1>
      <p>
        <h3> useEffect Hooks</h3>
        Useffect hooks are used to perfom data fetching operations and to
        perform parallel processing The syntax for useEffect hook is
        "useEffect(FUNCTION , DEPENDECY) function contains the logic to perform
        and DEPENDECY useEffect triggers when the given dependency is changed.
        if nothing is giving the function will run once.
      </p>
      <Useeffect></Useeffect>
    </div>
  );
}

export default Reactd5;
