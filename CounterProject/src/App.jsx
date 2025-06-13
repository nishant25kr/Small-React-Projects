import { useState } from "react";

function App() {
  
  let [counter,setCounter] = useState(15)

  const addNumber = () => {
    console.log("value added",Math.random())
    counter = counter + 1;
    setCounter(counter)
  }
  const subNumber = () => {
    console.log("value subtracted",Math.random())
    setCounter(counter-1);
  }
  return (
    
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter} </h2>
      <div className="m-5">
        <button className="m-1" onClick={addNumber} >Add Value {counter}</button>
        <button className="m-1" onClick={subNumber} >Remove Value {counter}</button>
      </div>
    </>
  );
}

export default App;
