import { sendWelcomeEmail } from "@/lib/send-email";
import { IncomingHttpHeaders } from "http";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook, WebhookRequiredHeaders } from "svix";

const webhookSecret = process.env.WEBHOOK_SECRET || "";

async function handler(request: Request) {
    const payload = await request.json();
    const headersList = headers();
    const heads = {
        "svix-id": headersList.get("svix-id"),
        "svix-timestamp": headersList.get("svix-timestamp"),
        "svix-signature": headersList.get("svix-signature"),
    };
    const wh = new Webhook(webhookSecret);
    let evt: Event | null = null;

    try {
        evt = wh.verify(
            JSON.stringify(payload),
            heads as IncomingHttpHeaders & WebhookRequiredHeaders
        ) as Event;
    } catch (err) {
        console.error((err as Error).message);
        return NextResponse.json({}, { status: 400 });
    }
    console.log(evt.data)

    const eventType: EventType = evt.type;
    if (eventType === "user.created") {
        await sendWelcomeEmail({ name: evt.data.first_name as string, email: evt.data.email_addresses[0].email_address as string });
    }
    return NextResponse.json({}, { status: 200 });
}

type EventType = "user.created" | "user.updated" | "*";
interface EmailAddress {
    created_at: number;
    email_address: string;
    id: string;
    linked_to: any[]; // You may want to replace `any[]` with a specific type if possible
    object: string;
    reserved: boolean;
    updated_at: number;
    verification: any; // You may want to replace `any` with a specific type if possible
}

interface ExternalAccount {
    approved_scopes: string;
    avatar_url: string;
    created_at: number;
    email_address: string;
    first_name: string;
    id: string;
    identification_id: string;
    image_url: string;
    label: null | string;
    last_name: string;
    object: string;
    provider: string;
    provider_user_id: string;
    public_metadata: Record<string, any>; // You may want to replace `any` with a specific type if possible
    updated_at: number;
    username: string;
    verification: any; // You may want to replace `any` with a specific type if possible
}

interface User {
    backup_code_enabled: boolean;
    banned: boolean;
    create_organization_enabled: boolean;
    created_at: number;
    delete_self_enabled: boolean;
    email_addresses: EmailAddress[];
    external_accounts: ExternalAccount[];
    external_id: null | string;
    first_name: string;
    has_image: boolean;
    id: string;
    image_url: string;
    last_active_at: number;
    last_name: string;
    last_sign_in_at: null | number;
    locked: boolean;
    lockout_expires_in_seconds: null | number;
    object: string;
    passkeys: any[]; // You may want to replace `any[]` with a specific type if possible
    password_enabled: boolean;
    phone_numbers: any[]; // You may want to replace `any[]` with a specific type if possible
    primary_email_address_id: null | string;
    primary_phone_number_id: null | string;
    primary_web3_wallet_id: null | string;
    private_metadata: Record<string, any>; // You may want to replace `any` with a specific type if possible
    profile_image_url: string;
    public_metadata: Record<string, any>; // You may want to replace `any` with a specific type if possible
    saml_accounts: any[]; // You may want to replace `any[]` with a specific type if possible
    totp_enabled: boolean;
    two_factor_enabled: boolean;
    unsafe_metadata: Record<string, any>; // You may want to replace `any` with a specific type if possible
    updated_at: number;
    username: string;
    verification_attempts_remaining: number;
    web3_wallets: any[]; // You may want to replace `any[]` with a specific type if possible
}

type Event = {
    data: User;
    object: "event";
    type: EventType;
};

export const GET = handler;
export const POST = handler;
export const PUT = handler;