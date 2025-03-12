import { useRouteError } from 'react-router-dom'
import LinkButton from './LinkButton'

type RouteError = {
    data?: string
    message?: string
}

function Error() {
    const error = useRouteError() as RouteError

    return (
        <div className="text-center">
            <h1>Something went wrong 😢</h1>
            <p>{error.data || error.message}</p>

            <LinkButton to="/login">&larr; Go back</LinkButton>
        </div>
    )
}

export default Error
