import {z} from 'zod'

export const messageSchema = z
    .string()
    .min(2,"Send Atleast 2 Character")
    .max(300,"Max message limit is 300 words")