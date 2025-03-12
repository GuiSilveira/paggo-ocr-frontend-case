import { useFetchFiles } from '@/hooks/fileHooks'
import { useEffect } from 'react'
import { toast } from 'sonner'
import FileItem from './FileItem'
import Spinner from './Spinner'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'

function FileList() {
    const { data, isLoading, isError } = useFetchFiles()

    useEffect(() => {
        const handleToastNotifications = () => {
            if (isError) {
                toast.error('Error loading files. Please try again. 😢')
                return
            }

            if (data && data.length === 0) {
                toast.info('No files found. 😢')

                return
            }

            if (data) {
                toast.success(`${data.length} files loaded successfully! 🎉`)
            }
        }

        handleToastNotifications()
    }, [isError, data])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="border rounded-lg border-gray-300 h-96 overflow-y-auto">
            <Table>
                <TableCaption>A list of your recent uploaded invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Invoice</TableHead>
                        <TableHead className="text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data && data.length > 0 ? (
                        data.map((file) => <FileItem key={file.id} file={file} />)
                    ) : (
                        <TableRow>
                            <TableCell colSpan={2} className="text-center py-4 text-gray-500">
                                No invoices uploaded yet.😢
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default FileList
