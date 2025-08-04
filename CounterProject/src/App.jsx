import { useState } from "react";
import Card from "./components/Card";
import Crousel from "./components/Crousel";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  const [counter, setCounter] = useState(15);
  const [color, setColor] = useState("blue");

  const addNumber = () => {
    console.log("Value added", Math.random());
    setCounter((prevCounter) => prevCounter + 1);
  };

  const subNumber = () => {
    console.log("Value subtracted", Math.random());
    setCounter((prevCounter) => prevCounter - 1);
  };

  const changeColor = (colorName) => {
    setColor(colorName);
  };

  const person = {
    name: "Nishant Kumar",
    age: "23",
  };

  const arr = [1, 2, 3];

  return (
    <div
      className="w-full h-screen duration-200 flex flex-col items-center justify-center gap-6"
      style={{ backgroundColor: color }}
    >
      <h1 className="bg-green-400 p-4 rounded-xl text-white text-xl">
        Chai aur React
      </h1>

      <h2 className="text-white text-lg">Counter value: {counter}</h2>

      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={addNumber}
        >
          Add Value
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={subNumber}
        >
          Remove Value
        </button>
      </div>

      {/* <Card name="Nishant Kumar" nickname="nishu" someObject={person} array={arr} /> */}

      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => changeColor("green")}
        >
          Green
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => changeColor("blue")}
        >
          Blue
        </button>
        <button
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          onClick={() => changeColor("black")}
        >
          Black
        </button>

      </div>
      
       <PasswordGenerator/>
    </div>
  );
}

export default App;
