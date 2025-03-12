import { useSendQuestion } from '@/hooks/llmHooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { Input } from './ui/input'

const chatFormSchema = z.object({
    prompt: z.string().min(1),
    fileId: z.number(),
})

interface ChatFormProps {
    fileId: number
}

function ChatForm({ fileId }: ChatFormProps) {
    const { mutate, isPending, isError, isSuccess } = useSendQuestion()

    const form = useForm({
        resolver: zodResolver(chatFormSchema),
        defaultValues: {
            prompt: '',
            fileId,
        },
    })

    const onSubmit = (data: { prompt: string; fileId: number }) => {
        data.fileId = fileId

        mutate(data, {
            onSuccess: () => {
                form.reset()
            },
        })
    }

    useEffect(() => {
        const handleToastNotifications = () => {
            if (isError) {
                toast.error('Error sending message. Please try again. 😢')
                return
            }

            if (isSuccess) {
                toast.success('Message sent successfully! 🎉')
            }
        }

        handleToastNotifications()
    }, [isError, isSuccess])

    return (
        <Form {...form}>
            <form className="flex gap-2 mt-2" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="prompt"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input placeholder="Type your message here" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button className="bg-blue-500 text-white cursor-pointer hover:bg-blue-400" disabled={isPending}>
                    Send
                </Button>
            </form>
        </Form>
    )
}

export default ChatForm
