import  { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState("hi")

    const Login = async () =>{
        console.log("login caller")
    }

    return (
        <UserContext.Provider value={{ user, setUser, Login }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider