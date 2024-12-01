import React, { createContext, useState, useContext } from 'react'

const Auth = createContext({ 
    user: null, 
    login: (us) => {}, 
    logout: () => {}
})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = (us) => {
        setUser(us)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <Auth.Provider value={{ user, login, logout }}>
            {children}
        </Auth.Provider>
    )
}

export const useAuth = () => useContext(Auth)