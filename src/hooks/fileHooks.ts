import { api } from '@/services/api'
import { File } from '@/types/file.type'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

const fetchFiles = async () => {
    const response = await api.get('/file')

    return response.data
}

export const FILES_QUERY_KEY = ['files']

export function useFetchFiles(options = {}) {
    return useQuery<File[], Error>({
        queryKey: FILES_QUERY_KEY,
        queryFn: fetchFiles,
        staleTime: 10000,
        refetchOnWindowFocus: true,
        ...options,
    })
}

export function useFilesCache() {
    const queryClient = useQueryClient()

    return {
        invalidateFilesCache: () => queryClient.invalidateQueries({ queryKey: FILES_QUERY_KEY }),
    }
}

async function fetchFile(fileId: number) {
    const response = await api.get(`${import.meta.env.VITE_API_URL}/file/download/${fileId}`, {
        responseType: 'blob',
    })

    const blob = new Blob([response.data], { type: response.headers['content-type'] })

    let fileName = 'downloaded_file.pdf'
    const contentDisposition = response.headers['content-disposition']

    if (contentDisposition) {
        const match = contentDisposition.match(/filename="?([^"]+)"?/)
        if (match?.[1]) {
            fileName = match[1]
        }
    }

    const url = window.URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()

    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
}

export function useDownloadFile() {
    return useMutation({
        mutationFn: fetchFile,
        onError: () => {
            toast.error('An error occurred while trying to download the file. Please try again.')
        },
        onSuccess: () => {
            toast.success('File downloaded successfully')
        },
    })
}
