import React from "react";
import ThemeToggle from "../ThemeToggle.js";
import UseReducer from "../hooks/Usereducer.js";

function Reactd8() {
  return (
    <div>
      <h1>React Day8 </h1>
      <h4> useReduce Hook</h4>
      <span>
        Usereduce hook is used to manage multiple states which has,
        <ol>
          <li>
            <b>Dispatch:</b>The dispatch is used to perform or to trigger an
            action
          </li>
          <li>
            <b>Action:</b>The action has two methods:
            <ol style={{ listStyleType: "lower-roman" }}>
              <li>
                <b>Type:</b>The name of action which is to be perfomed (a
                string){" "}
              </li>
              <li>
                <b>payload:</b>Contains the data to be updated
              </li>
            </ol>
          </li>
        </ol>
      </span>
      <UseReducer></UseReducer>
      <h4> Changing the theme using useState, useEffect </h4>
      <ThemeToggle></ThemeToggle>
    </div>
  );
}

export default Reactd8;
