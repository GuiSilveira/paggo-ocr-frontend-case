import { useFilesCache } from '@/hooks/fileHooks'
import { cn } from '@/lib/utils'
import { api } from '@/services/api'
import { AxiosProgressEvent } from 'axios'
import { useState } from 'react'
import ProgressBar from './ProgressBar'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error'

function UploadForm() {
    const [file, setFile] = useState<File | null>(null)
    const [status, setStatus] = useState<UploadStatus>('idle')
    const [progress, setProgress] = useState(0)
    const [firstFile, setFirstFile] = useState(true)
    const { invalidateFilesCache } = useFilesCache()

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files

        if (files) {
            setStatus('idle')
            setFile(files[0])
        }
    }

    const handleUpload = async () => {
        if (!file) {
            setStatus('error')

            console.log(status)

            return
        }

        setStatus('uploading')
        setFirstFile(false)
        setProgress(0)

        const formData = new FormData()
        formData.append('file', file)

        try {
            await api.post('/file/upload', formData, {
                onUploadProgress: (progressEvent: AxiosProgressEvent) => {
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / (progressEvent.total ? progressEvent.total : 1)
                    )

                    setProgress(percentCompleted)
                },
            })

            setStatus('success')
            setProgress(100)
            invalidateFilesCache()
        } catch {
            setStatus('error')
        }
    }

    return (
        <>
            <div className="flex gap-2">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label
                        className={cn(
                            status === 'error' && 'text-red-500',
                            status === 'success' && 'text-green-500',
                            (status === 'uploading' || status === 'idle') && 'text-black'
                        )}
                        htmlFor="invoice"
                    >
                        Invoice
                    </Label>
                    <Input id="invoice" type="file" onChange={handleFileChange} className="cursor-pointer" />
                </div>
                <Button
                    type="submit"
                    className="self-end cursor-pointer"
                    disabled={status === 'uploading'}
                    onClick={handleUpload}
                >
                    {status === 'uploading' ? 'Uploading...' : 'Upload'}
                </Button>
            </div>
            {file && status === 'uploading' && <ProgressBar progress={progress} />}
            {file && status === 'success' && <p className="text-sm text-green-500">File uploaded successfully</p>}
            {status === 'error' && <p className="text-sm text-red-500">An error occurred while uploading the file</p>}
            {!file && !firstFile && <p className="text-sm text-red-500">Please select a file to upload</p>}
        </>
    )
}

export default UploadForm
