import React from 'react'
import { useState } from 'react'

const UserContext = React.createContext()

export const UserContextProvider = ({children}) => {

    const [name,setname] = useState("Nishant")

    return(
        <UserContext.Provider value={{name,setname}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;
