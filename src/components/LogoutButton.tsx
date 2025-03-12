import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

function LogoutButton({ className }: { className?: string }) {
    const handleLogout = () => {
        localStorage.removeItem('token')
    }

    return (
        <button
            onClick={handleLogout}
            className={cn('p-2 text-sm underline cursor-pointer self-start hover:text-gray-500', className)}
        >
            <Link to="/login">Sign Out</Link>
        </button>
    )
}

export default LogoutButton
