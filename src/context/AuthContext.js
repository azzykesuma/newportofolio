import React,{ useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

   function signUp(email,password) {
       return auth.createUserWithEmailAndPassword(email,password)
   }

    const Login = (email,password) => {
        return auth.signInWithEmailAndPassword(email,password)
    }
    const logout = () => {
        return auth.signOut()
    }
    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email)
    }
    const updateEmail = (email) => {
        return currentUser.updateEmail(email)
    }
    const updatePassword = (password) => {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])

    const value = {
        currentUser,
        signUp,
        Login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider >
    )
}

export default AuthContext
