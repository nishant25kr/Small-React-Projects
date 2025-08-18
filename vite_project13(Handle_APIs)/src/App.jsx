import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const controller = new AbortController()
      ;(async () => {
        try {
          setLoading(true)
          setError(false)
          const response = await axios(
            'http://localhost:3000/api/products?search='
            + search, {
            signal: controller.signal
          })
          console.log(response.data)
          setProducts(response.data)
          setLoading(false)
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log('Request cancled', error.message);
            return;
          }
          setError(true)
          setLoading(false)
        }
      })()
    //cleanup code
    return ()=>{
      controller.abort()
    }

  }, [search])

  // if(loading){
  //   return <h1>Loading...</h1>
  // }

  // if(error){
  //   return <h1>something went wrong</h1>
  // }


  return (
    <>
      {loading && (<h1>Loading...</h1>)}
      {error && (<h1>something went wrong</h1>)}
      <input
        type="text"
        onChange={(e)=>{setSearch(e.target.value)}}

      />
      <h1>Api calling in react</h1>
      <h1>Number of products are: {products.length} </h1>


    </>
  )
}

export default App
