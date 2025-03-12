import { LoginForm } from '@/components/login-form'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/')
        }
    }, [navigate])

    return <LoginForm navigate={navigate} />
}

export default Login
