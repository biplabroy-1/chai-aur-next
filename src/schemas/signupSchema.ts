import { z } from "zod";

export const userValidationSchema = z
    .string()
    .min(2,"Username must 2 characters")
    .max(10,"Username must not more then 10 characters")


export const signUpSchema = z.object({
    username: userValidationSchema,
    email:z.string().email(),
    password:z.string().min(6,{message:"Password Must be 6 Chars"}).max(20,{message:"Password max char is 20"}),
})