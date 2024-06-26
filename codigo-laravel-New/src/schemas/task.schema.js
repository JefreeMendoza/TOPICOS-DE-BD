import {z} from 'zod'

export const createTaskSchema = z.object({
    username: z.string({
        required_error: 'Title is required'
    }),
    description: z.string({
        required_error: 'Description must be a string'
    }),
    date: z.string().datetime().optional(),
});
