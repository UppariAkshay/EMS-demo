import { createContext, useState, useEffect } from "react"
import { setLocalStorage, getLocalStorage } from "../../LocalStorage"

export const AuthContext = createContext()


export const AuthProvider = ({children}) => {

    const [authData, setauthData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const data = getLocalStorage()
        setauthData(data)
    }, [])

    return <div>
        <AuthContext.Provider value={[authData, setauthData]}>
            {children}
        </AuthContext.Provider>
    </div>
}

