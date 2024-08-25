import { userSchema } from '@repo/database/schemas'
export const insertUserSchema = userSchema.omit({ id: true })