import { createContext, useState } from "react";

export const AuthStore = createContext()

function AuthContext({children}) {
   const [user, setUser] = useState(null)

   function loginUser(user) {
    setUser(user)
    }

  return <AuthStore.Provider value={{user, loginUser}}>
        {children} 
    </AuthStore.Provider>
  
}

export default AuthContext