'use server';
import { lucia } from "@repo/auth";
import * as argon2 from "argon2";
import { generateId } from "lucia";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";




import { prisma } from '@/lib/database';
import { insertUserSchema } from '@/lib/database/schema/user';
import { actionClient } from '../lib/safe-action';
export const register = actionClient
    .schema(insertUserSchema)
    .action(async ({ parsedInput: { username, password } }) => {
        const hashedPassword = await argon2.hash(password);
        const userID = generateId(15);
        await prisma.user.create({
            data: {
                id: userID,
                username,
                password: hashedPassword,
            }
        })
        const session = await lucia.createSession(userID, {})
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies().set(
            sessionCookie.name,
            sessionCookie.value,
            sessionCookie.attributes
        )
        redirect('/dashboard')
    });