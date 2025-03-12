import { useFetchLlmInteractions } from '@/hooks/llmHooks'
import { Interaction } from '@/types/llm.type'
import { useEffect } from 'react'
import { toast } from 'sonner'
import ChatMessage from './ChatMessage'
import Spinner from './Spinner'

interface ChatMessageListProps {
    fileId: number
}

function ChatMessageList({ fileId }: ChatMessageListProps) {
    const { data, isLoading, isError } = useFetchLlmInteractions(fileId)

    useEffect(() => {
        const handleToastNotifications = () => {
            if (isError) {
                toast.error('Error loading messages. Please try again. 😢')

                return
            }

            if (data && data.length === 0) {
                toast.info('No messages found. 😢')

                return
            }

            if (data) {
                toast.success('Messages loaded successfully! 🎉')
            }
        }

        handleToastNotifications()
    }, [isError, data])

    if (isLoading) return <Spinner />

    return (
        <ul className="border border-solid border-gray-300 rounded-lg flex flex-col gap-2 h-[512px] p-4 overflow-y-auto">
            {data?.map((interaction: Interaction) => (
                <div key={interaction.id} className="flex flex-col gap-2">
                    <ChatMessage sender="user" message={interaction.question} />
                    <ChatMessage sender="ai" message={interaction.answer} />
                </div>
            ))}
        </ul>
    )
}

export default ChatMessageList
