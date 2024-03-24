// lib/emails/send-welcome.ts
import { WelcomeEmail } from "@/components/emails/welcome";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendWelcomeEmail({ name, email }: { name: string | null | undefined, email: string | null | undefined }) {
    const emailTemplate = WelcomeEmail();
    try {
        // Send the email using the Resend API
        await resend.emails.send({
            from: "Hosenur from Ignite <ignite@hosenur.dev>",
            to: email as string,
            subject: "Welcome to Ignite!",
            react: emailTemplate,
        });
    } catch (error) {
        // Log any errors and re-throw the error
        console.log({ error });
        throw error;
    }
}