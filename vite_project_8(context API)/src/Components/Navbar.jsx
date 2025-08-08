import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";


export default function Navbar(){
    const {setUser} = useContext(UserContext)

    const handleLogout = () =>{
        setUser();
    }

    return(
        <div className=" flex items-center justify-center  p-4 ">
            this is navbar
            <button className="border" onClick={handleLogout}>Logout</button>
        </div>
    )
}