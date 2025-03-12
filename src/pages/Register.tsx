import LinkButton from '@/components/LinkButton'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRegister } from '@/hooks/authHooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
    name: z.string().min(3, {
        message: 'Name must be at least 3 characters',
    }),
    email: z.string().email({
        message: 'Please enter a valid email address',
    }),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters',
    }),
})

export type RegisterInputs = z.infer<typeof formSchema>

function Register() {
    const { mutate } = useRegister()

    const form = useForm<RegisterInputs>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    })

    const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
        mutate(data)
    }

    return (
        <Card className="w-full max-w-sm mx-auto">
            <CardHeader>
                <LinkButton to="-1">
                    <ArrowLeft />
                </LinkButton>
                <CardTitle>Register your account</CardTitle>
                <CardDescription>Enter your data below to create your account</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <div className="grid gap-3">
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" type="text" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <div className="grid gap-3">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="email@email.com" type="email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <div className="grid gap-3">
                                        <div className="flex items-center">
                                            <FormLabel>Password</FormLabel>
                                        </div>
                                        <FormControl>
                                            <Input type="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                )}
                            />
                            <div className="flex flex-col gap-3">
                                <Button
                                    type="submit"
                                    className="w-full cursor-pointer"
                                    disabled={form.formState.isSubmitting}
                                >
                                    Create account
                                </Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default Register
