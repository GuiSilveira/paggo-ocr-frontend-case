import { cn } from '@/lib/utils'

interface ChatMessageProps {
    sender: 'ai' | 'user'
    message: string
}

function ChatMessage({ sender, message }: ChatMessageProps) {
    return (
        <li className={sender === 'ai' ? 'self-start' : 'self-end'}>
            <div
                className={cn(
                    'rounded-lg p-2 text-white text-base max-w-3xs break-words',
                    sender === 'ai' ? 'bg-gray-500' : 'bg-blue-500'
                )}
            >
                <p className="font-bold">{sender === 'ai' ? 'A.I:' : 'User:'}</p>
                <p>{message}</p>
            </div>
        </li>
    )
}

export default ChatMessage
