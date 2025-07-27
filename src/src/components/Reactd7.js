import React from "react";
import Usememo from "../hooks/Usememo";
import Uselocation from "../hooks/Uselocation";
import { BrowserRouter } from "react-router-dom";

function Reactd7() {
  return (
    <div>
      <h1>React Day 7</h1>
      <h4> useMemo Hook</h4>
      <span>
        UseMemo is used to optimize the pure function by avoiding re-rendering.A
        pure function is the one which will not cause side effect and it returns
        the same value if the arguments are not changed
      </span>
      <Usememo></Usememo>
      <h4> useLocation Hook</h4>
      <span>Uselocation is used to find the location of the webpage</span>
      <BrowserRouter>
        <Uselocation></Uselocation>
      </BrowserRouter>
    </div>
  );
}

export default Reactd7;
