import {z} from 'zod'

export const verifySchema = z
    .number()
    .min(6)
    .max(6)