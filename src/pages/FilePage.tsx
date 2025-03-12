import FileList from '@/components/FileList'
import LogoutButton from '@/components/LogoutButton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import UploadForm from '@/components/UploadForm'

function FilePage() {
    return (
        <Card className="max-w-[360px] sm:max-w-2xl lg:max-w-6xl mx-auto">
            <CardHeader className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle>Upload a File</CardTitle>
                        <CardDescription>Upload your file below</CardDescription>
                    </div>
                    <LogoutButton />
                </div>
                <UploadForm />
            </CardHeader>
            <CardContent>
                <FileList />
            </CardContent>
        </Card>
    )
}

export default FilePage
