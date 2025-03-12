import { createContext, ReactNode, useEffect, useState } from 'react'

interface AuthContextValue {
    token: string | null
    isAuthenticated: boolean
    login: (token: string) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        const savedToken = localStorage.getItem('token')
        if (savedToken) {
            setToken(savedToken)
        }
    }, [])

    function login(receivedToken: string) {
        setToken(receivedToken)
        localStorage.setItem('token', receivedToken)
    }

    function logout() {
        setToken(null)
        localStorage.removeItem('token')
    }

    const value: AuthContextValue = {
        token,
        isAuthenticated: !!token,
        login,
        logout,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext }
