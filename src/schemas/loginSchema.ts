import {z} from 'zod'

export const loginSchema = z
    .string()
    .min(6)
    .max(6)