import './App.css'
import ThemeContextProvider from './Contexts/ThemeContextProvider';
import ThemeCard from './Components/ThemeCard';

function App() {
 
  return (
    <ThemeContextProvider>
      <h1 className='text-4xl'>Theme changer in card using ContextAPI</h1>
      <ThemeCard/>
    </ThemeContextProvider>
  )
}

export default App;
