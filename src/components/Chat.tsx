import ChatForm from './ChatForm'
import ChatMessageList from './ChatMessageList'

interface ChatProps {
    fileId: number
}

function Chat({ fileId }: ChatProps) {
    return (
        <div className="sm:w-[500px] flex flex-col">
            <div>
                <ChatMessageList fileId={fileId} />
            </div>
            <ChatForm fileId={fileId} />
        </div>
    )
}

export default Chat
