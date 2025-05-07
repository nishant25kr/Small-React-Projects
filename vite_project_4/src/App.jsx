import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  const [colorname,setcolorname] = useState("olive")
  console.log(color);

  return (
    <div className="w-full h-screen duration-200 flex items-center justify-center"
      style={{ backgroundColor: color }}>
        <div className='text-white text-3xl font-bold' >
          This is {colorname} color
        </div>
      <div className=' fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button className='outline-node px-4 rounded py-1 shadow-lg'
            style={{ backgroundColor: "red" }}
            onClick={()=>{setColor("red");setcolorname("Red")}}
          >Red</button>
          <button className='text-white outline-node px-4 rounded py-1 shadow-lg'
            style={{ backgroundColor: "Black" }}
            onClick={()=>{setColor("black");setcolorname("Black")}}
          >Black</button>
          <button className='outline-node px-4 rounded py-1 shadow-lg'
            style={{ backgroundColor: "Green" }}
            onClick={()=>{setColor("green");setcolorname("Green")}}
          >Green</button>
        </div>
      </div>
    </div>
  )
}

export default App
