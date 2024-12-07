import { createContext, useState, useEffect } from "react"
import { setLocalStorage } from "../../LocalStorage"

export const AuthContext = createContext()


export const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState()

    useEffect(() => {
        setLocalStorage()
    }, [])

    return <div>
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
}

