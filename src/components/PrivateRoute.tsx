import { useAuth } from '@/hooks/authHooks'
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
    children: ReactNode
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
    const { isAuthenticated } = useAuth()

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return <>{children}</>
}
