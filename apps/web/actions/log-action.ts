'use server';
import { z } from 'zod';
import { actionClient } from '../lib/safe-action';
const schema = z.object({
    message: z.string(),
});
export const logAction = actionClient
    .schema(schema)
    .action(async ({ parsedInput: { message } }) => {
        console.log(message);
    });