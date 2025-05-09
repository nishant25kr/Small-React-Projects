import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()

  return (
    <div className='h-screen flex justify-center '>

        <h1>Your userid is : {userid}</h1>
      
    </div>
  )
}

export default User
