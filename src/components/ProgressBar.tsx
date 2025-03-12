interface ProgressBarProps {
    progress: number
}

function ProgressBar({ progress }: ProgressBarProps) {
    return (
        <div className="flex gap-2 items-center">
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                    className="h-full bg-blue-500"
                    style={{
                        width: `${progress}%`,
                    }}
                />
            </div>
            <p
                className="
                text-xs
                text-gray-500
                flex
                justify-end
                mt-1
            "
            >
                {progress}%
            </p>
        </div>
    )
}

export default ProgressBar
