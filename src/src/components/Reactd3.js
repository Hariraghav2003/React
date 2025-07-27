import React from "react";
import Mounting from "../Mounting";
function Reactd3() {
  return (
    <div>
      <h1>React Day 3</h1>
      <p>
        React Day 3 started with react lifecycle it is the stage by stage
        process for designing an UT The phases are
        <ul>
          <li>Mounting:Where the UI component is intiated</li>
          <li>Render:The JS or JSX is converted into HTML/CSS format</li>
          <li>Unmounting:Removing the UI component</li>
        </ul>
        This react lifecycle differs based on the functional component and the
        class component.
      </p>
      <h4>Class component</h4>
      <p>
        Class component is a component that has its own state and lifecycle
        methods which are the earlier concepts where functions are limited the
        methods in class component at each stages are,
        <h5>Mounting Phase</h5>
        <ol>
          <li>constructor:Runs automatically when function is called</li>
          <li> componentDidMount():Mounting the intial UI component</li>
          <li>
            componentDidUpdate():TO check whether the component is mounted and
            to update it
          </li>
          <li>render():To convert the UI component to HTML/CSS format</li>
        </ol>
        <h5>Unmounting Phase</h5>
        <ol>
          <li>componentWillUnmount():To remove the UI component</li>
        </ol>
        <Mounting></Mounting>
      </p>
      <h4>Functional Component</h4>
      <p>
        Functional component is same as class component but they are limited and
        not suited for dynamic webpages to overcome this hooks are introduced
      </p>
    </div>
  );
}

export default Reactd3;
