import { useDownloadFile } from '@/hooks/fileHooks'
import { File } from '@/types/file.type'
import { BotIcon, FileDownIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { TableCell, TableRow } from './ui/table'

interface FileItemProps {
    file: File
}

function FileItem({ file }: FileItemProps) {
    const navigate = useNavigate()
    const { mutate: downloadFile } = useDownloadFile()

    function handleNavigate() {
        navigate(`/file/${file.id}`, {
            state: {
                file,
            },
        })
    }

    return (
        <TableRow key={file.id}>
            <TableCell>{file.originalName}</TableCell>
            <TableCell className="flex justify-center gap-2">
                <Button className="bg-blue-500 hover:bg-blue-400 cursor-pointer" onClick={handleNavigate}>
                    <BotIcon />
                    A.I Chat
                </Button>
                <Button
                    className="bg-green-500 hover:bg-green-400 cursor-pointer"
                    onClick={() => downloadFile(file.id)}
                >
                    <FileDownIcon />
                    Download
                </Button>
            </TableCell>
        </TableRow>
    )
}

export default FileItem
