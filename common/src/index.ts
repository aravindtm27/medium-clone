import z from 'zod';

export const signupInput = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string().optional()
})

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const createblogInput = z.object({
    title: z.string(),
    content: z.string()
})

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})

export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateblogInput = z.infer<typeof createblogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>