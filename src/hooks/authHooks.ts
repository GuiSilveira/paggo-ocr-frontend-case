import { LoginFormInputs } from '@/components/login-form'
import { AuthContext } from '@/context/AuthContext'
import { RegisterInputs } from '@/pages/Register'
import { api } from '@/services/api'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export function useAuth() {
    return useContext(AuthContext)
}

async function loginUser(data: LoginFormInputs) {
    const response = await api.post('/auth/login', data)

    return response.data
}

export function useLogin(navigate: NavigateFunction) {
    const { login } = useAuth()

    return useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            const { accessToken } = data

            login(accessToken)

            toast.success('Login successful')

            setTimeout(() => {
                navigate('/')
            }, 1000)
        },
        onError: () => {
            toast.error('An error occurred while trying to log in. Please check your credentials and try again.')
        },
    })
}

async function registerUser(data: RegisterInputs) {
    const response = await api.post('/auth/register', data)
    return response.data
}

export function useRegister() {
    const navigate = useNavigate()
    const { login } = useAuth()

    return useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {
            const { accessToken } = data
            login(accessToken)

            toast.success('Registration successful')

            setTimeout(() => {
                navigate('/')
            }, 1000)
        },
        onError: () => {
            toast.error('An error occurred while trying to register. Please check your data and try again.')
        },
    })
}
