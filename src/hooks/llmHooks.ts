import { api } from '@/services/api'
import { Interaction } from '@/types/llm.type'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const fetchLlmInteractions = async (fileId: number): Promise<Interaction[]> => {
    const response = await api.get(`/llm/file/${fileId}`)

    return response.data
}

export function useFetchLlmInteractions(fileId: number) {
    return useQuery({
        queryKey: ['llm', fileId],
        queryFn: () => fetchLlmInteractions(fileId),
        enabled: !!fileId,
        staleTime: 1000 * 60 * 5,
        retry: 2,
    })
}

export function useSendQuestion() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({ prompt, fileId }: { prompt: string; fileId: number }) => {
            const response = await api.post('/llm', { prompt, fileId })

            return response.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['llm'],
            })
        },
        onError: (error) => {
            console.error('Erro ao enviar pergunta:', error)
        },
    })
}
