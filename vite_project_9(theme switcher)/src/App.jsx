import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProfider } from './Contexts/Theme'
import Card from './Components/Card';
import ThemeButton from './Components/ThemeButton';

function App() {
  const [themeMode,setthemeMode] = useState("light");

  const lightTheme = () => {
    setthemeMode("light")
  }
  const darkTheme = () => {
    setthemeMode("dark")
  }

  //acctually changing the color

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (

    <ThemeProfider value={{ themeMode, lightTheme, darkTheme }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

            <ThemeButton/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>

          </div>
        </div>
      </div>

    </ThemeProfider>



  )
}

export default App
