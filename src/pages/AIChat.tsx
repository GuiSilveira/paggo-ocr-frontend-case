import Chat from '@/components/Chat'
import LinkButton from '@/components/LinkButton'
import { File } from '@/types/file.type'
import { ArrowLeft } from 'lucide-react'
import { useLocation } from 'react-router-dom'

function AIChat() {
    const location = useLocation()
    const { file }: { file: File } = location.state

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm w-[360px] sm:w-[532px] my-4">
            <div className="mb-4">
                <LinkButton to="-1">
                    <ArrowLeft />
                </LinkButton>
                <h1 className="text-xl font-bold">A.I Chat</h1>
                <p className="text-sm text-gray-500 mt-1">Get the conversation started about {file.originalName}!</p>
            </div>
            <div>
                <p className="text-base font-semibold">Extracted Text:</p>
                <div className="mb-4 max-h-40 overflow-y-auto pr-4">
                    <p className="text-sm text-justify">{file.extractedText}</p>
                </div>
            </div>
            <Chat fileId={file.id} />
        </div>
    )
}

export default AIChat
