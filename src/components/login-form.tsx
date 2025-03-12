import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useLogin } from '@/hooks/authHooks'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { ComponentProps } from 'react'
import { useForm } from 'react-hook-form'
import { Link, NavigateFunction } from 'react-router-dom'
import { z } from 'zod'
import { Form, FormControl, FormField, FormLabel, FormMessage } from './ui/form'

const formSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address',
    }),
    password: z.string().min(6, {
        message: 'Please enter a valid password',
    }),
})

export type LoginFormInputs = z.infer<typeof formSchema>

type LoginFormProps = {
    navigate: NavigateFunction
} & ComponentProps<'div'>

export function LoginForm({ navigate, className, ...props }: LoginFormProps) {
    const { mutate } = useLogin(navigate)

    const form = useForm<LoginFormInputs>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = (data: LoginFormInputs) => {
        mutate(data)
    }

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card className="w-full max-w-sm mx-auto">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>Enter your email below to login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-6">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <div className="grid gap-3">
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="email"
                                                    placeholder="email@email.com"
                                                    type="email"
                                                    {...field}
                                                />
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
                                                <Input id="password" type="password" {...field} />
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
                                        Login
                                    </Button>
                                </div>
                            </div>
                            <div className="mt-4 text-center text-sm">
                                Don&apos;t have an account?{' '}
                                <Link to="/register" className="underline underline-offset-4">
                                    Sign up
                                </Link>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
