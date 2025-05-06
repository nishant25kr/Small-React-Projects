import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/Card.jsx'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  let person1 = {
    username:"Nishant",
    email:"nishant@gmail.com",
    sname:"kumar"
  }
  let person2 = {
    username:"Nishant",
    email:"nishant1@gmail.com",
    sname:"kr"
  }


  let array=[1,2,3,4]

  return (
    <div>
      <h1 className='bg-green-400 p-5 rounded-xl' >hello world with tailwind</h1>
      <Card object={person1}  />
      <Card object={person2} />
    </div>
  )
}

export default App
