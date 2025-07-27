import React from "react";
import User from "../hooks/Usecontext.js";
import Try from "../Try.js";
import Useref from "../hooks/Useref.js";
function Reactd6() {
  return (
    <div>
      <h1>React Day 6</h1>
      <h4> usecontext Hooks</h4>
      <span>
        Usecontext hooks are used to overcome the props drilling problem where
        the data or property is needed in the fifth child class for that we need
        to pass the data over 4 children which will increases the workload so to
        overcome this we use useContext hook.
        <User></User>
      </span>
      <h4> useRef Hooks</h4>
      <span>
        Useref hooks will not re-render the UI omponent and you can directly
        access the DOM Elements
        <Useref></Useref>
      </span>
      <h4>Importing UI templates</h4>
      <span>
        Next we see how to import UI designs from Material UI, Chakara UI, React
        Bootstrap,Antdesign like this
        <Try></Try>
      </span>
    </div>
  );
}
export default Reactd6;
