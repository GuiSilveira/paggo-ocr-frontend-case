import { Outlet, useNavigation } from 'react-router-dom'
import { Toaster } from 'sonner'
import Loader from './Loader'

export default function AppLayout() {
    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading'

    return (
        <>
            {isLoading && <Loader />}
            <Toaster richColors />
            <main className="mx-auto flex items-center justify-center">
                <Outlet />
            </main>
        </>
    )
}
