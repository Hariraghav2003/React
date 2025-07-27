import Reactd1 from "./components/Reactd1.js";
import Reactd10 from "./components/Reactd10.js";
import Reactd2 from "./components/Reactd2.js";
import Reactd3 from "./components/Reactd3.js";
import Reactd4 from "./components/Reactd4.js";
import Reactd5 from "./components/Reactd5.js";
import Reactd6 from "./components/Reactd6.js";
import Reactd7 from "./components/Reactd7.js";
import Reactd8 from "./components/Reactd8.js";
import Reactd9 from "./components/Reactd9.js";

function App() {
  //Default props
  Reactd2.defaultProps = {
    name: "Guest",
  };
  return (
    <div className="App">
      <Reactd1></Reactd1>
      <hr></hr>
      <Reactd2></Reactd2>
      <hr></hr>
      <Reactd3></Reactd3>
      <hr></hr>
      <Reactd4></Reactd4>
      <hr></hr>
      <Reactd5></Reactd5>
      <hr></hr>
      <Reactd6></Reactd6>
      <hr></hr>
      <Reactd7></Reactd7>
      <hr></hr>
      <Reactd8></Reactd8>
      <hr></hr>
      <Reactd9></Reactd9>
      <hr></hr>
      <Reactd10></Reactd10>
    </div>
  );
}

export default App;
