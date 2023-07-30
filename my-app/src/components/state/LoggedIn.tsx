import { useState } from 'react';


export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn]  = useState(false)
    const handleLogin = () => {

        setIsLoggedIn(true)
    }
    
    const handleLogeout = () => {

        setIsLoggedIn(false)
    }
    const handleLogout = () => { }
    return (

        <div>


            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}> Logout</button>
            <div> user is {isLoggedIn.Length ? 'logged in' : 'logged out'}</div>
        </div>
    )
}
