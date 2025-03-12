import AppLayout from '@/components/AppLayout'
import Error from '@/components/Error'
import PrivateRoute from '@/components/PrivateRoute'
import AIChat from '@/pages/AIChat'
import FilePage from '@/pages/FilePage'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: (
                    <PrivateRoute>
                        <FilePage />
                    </PrivateRoute>
                ),
            },
            {
                path: '/file/:fileId',
                element: (
                    <PrivateRoute>
                        <AIChat />
                    </PrivateRoute>
                ),
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ],
    },
])
