import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  let number = 15;

  let[counter, setCounter] = useState(number)

  const addvalue = () => {
    if(counter<20){
      counter+=1;
      console.log("value added ", Math.random());
      console.log(counter, Math.random());
      setCounter(counter);
    }
    else{
      alert("limit exited")
    }
    
  };

  const removevalue=()=>{
    if(counter>0){
      console.log("Remove value trigered",Math.random());
      counter-=1;
      setCounter(counter);
    }else{
      alert('Number cannot be negative')
    }
    
  }

  return (
    <>
    <h1>hello world</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addvalue}>addValue</button> <br />
    <button onClick={removevalue} >removeValue</button>
    </>
  )
}

export default App
