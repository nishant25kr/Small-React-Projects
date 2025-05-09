import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    
    const data = useLoaderData();
    
    // const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/nishant25kr')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Username:{data.username} <br />
      Github followers: {data.followers} <br />
      <img src={data.avatar_url} alt="img loading" />
    
    </div>
   
  )
}

export default Github


// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     return response.json()
// }

export const gitinfo = async () => {
  const response = await fetch("https://api.github.com/users/nishant25kr")
  return response.json();
}