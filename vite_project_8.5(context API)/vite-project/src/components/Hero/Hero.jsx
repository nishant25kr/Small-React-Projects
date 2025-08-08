import { useContext } from "react"
import UserContext from "../../contexts/UserContext"
import Login from "../Login"

function Hero() {
    const {user} = useContext(UserContext)
    
    if(!user) return <div>
        <Login/>
    </div> 

    return(
        <div>
            {user}
        </div>
    )
    
}

export default Hero
