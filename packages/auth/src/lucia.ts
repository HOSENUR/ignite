import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@repo/database";
const prisma = new PrismaClient();
export const lucia = new PrismaAdapter(prisma.session, prisma.user);