import { useContext } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import UserContext from './contexts/UserContext'


function App() {
  const {user} = useContext(UserContext)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Footer/>
    </>

  )
}

export default App
