import React, { useReducer} from 'react';
const reducer = (state, action) => {

  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1,message:action.payload};
    case 'DECREMENT':
      return { count: state.count - 1,message:action.payload};
    case 'DOUBLEINCREMENT':
        return { count: state.count + 2,message:action.payload};
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};
function UseReducer() {

  const [state, dispatch] = useReducer(reducer, { count: 0 ,message:''});
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT", payload: "Incremented" }); 
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT", payload: "Decremented" }); 
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  const handledblinc = () => {
    dispatch({ type: "DOUBLEINCREMENT", payload: "Double Incremented" }); 
  };



  return (
    <div>
      <h2>Counter</h2>
      <h1>Count: {state.count}</h1>
      <h1>message:{state.message}</h1>
      <button onClick={handleIncrement} >Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onDoubleClick={handledblinc}>Double Increment</button>

    </div>
  );
}
export default UseReducer