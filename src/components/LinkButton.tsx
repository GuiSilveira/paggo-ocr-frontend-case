import { Link, useNavigate } from 'react-router-dom'

interface LinkButtonProps {
    children: React.ReactNode
    to: string
}

function LinkButton({ children, to }: LinkButtonProps) {
    const navigate = useNavigate()
    const className = 'text-sm text-black hover:text-gray-500 cursor-pointer'

    if (to === '-1')
        return (
            <button className={className} onClick={() => navigate(-1)}>
                {children}
            </button>
        )

    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    )
}

export default LinkButton
