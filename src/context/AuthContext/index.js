// import { createContext, useState, useEffect } from "react"
// import { setLocalStorage, getAuthorizedUsersAPI } from "../../LocalStorage"

// export const AuthContext = createContext()


// export const AuthProvider = ({children}) => {

//     const [authData, setAuthData] = useState(null)

//     useEffect(() => {
//         const authorizedUsersData = getAuthorizedUsersAPI()
//         setAuthData(authorizedUsersData)
//     }, [])

//     return <div>
//         <AuthContext.Provider value={[authData, setAuthData]}>
//             {children}
//         </AuthContext.Provider>
//     </div>
// }

