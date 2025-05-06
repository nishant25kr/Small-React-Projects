import React from 'react'

export default function Card({object}) {
    // console.log(object.username)

    // const name = object.username
    // console.log(name);
    
    // console.log(object.person.username)
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <h3>name:  {object.username}</h3>
            <h3>email: {object.email}</h3>
            <h3>sname: {object.sname}</h3>


        </div>

    )
}
