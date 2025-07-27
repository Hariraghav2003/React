import React, { useEffect, useState } from "react";

// 🔹 Named function (React Component itself)
function Reactd10() {
  const [data, setData] = useState(null);

  // 🔹 Synchronous function (normal function)
  function greetUser(name) {
    return `Hello, ${name}!`;
  }

  // 🔹 Arrow function (used commonly in React)
  const addNumbers = (a, b) => {
    return a + b;
  };

  // 🔹 Anonymous function (passed directly)
  const showAlert = function () {
    alert("This is an anonymous function!");
  };

  // 🔹 Asynchronous function (for API calls or delays)
  const fetchData = async () => {
    // Simulating async call with setTimeout
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setData("Async data loaded!");
  };

  // 🔹 useEffect with async call inside
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>React Function Types Demo</h1>

      <h3>{greetUser("React Developer")}</h3>
      <p>Sum of 5 + 10 = {addNumbers(5, 10)}</p>

      <button onClick={showAlert}>Click for Alert</button>

      <p>{data ? data : "Loading async data..."}</p>
    </div>
  );
}

export default Reactd10;
