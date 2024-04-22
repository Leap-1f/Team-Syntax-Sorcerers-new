import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ReactNode } from "react";
import "./globals.css";
export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <UserProvider>
                <body>{children}</body>
            </UserProvider>
        </html>
    );
}
